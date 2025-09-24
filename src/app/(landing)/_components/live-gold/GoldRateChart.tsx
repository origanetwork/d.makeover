"use client";

import { Square } from "lucide-react";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Data model for the chart
export type GoldPoint = {
  time: string; // e.g., "9:00 am"
  k24: number; // 24K price per gram
  k22: number; // 22K price per gram
};

export interface GoldRateChartProps {
  data: GoldPoint[];
}

// Simple INR formatter used across the tooltip
const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// Narrow tooltip props locally to avoid `any` while not tying to specific Recharts internals
type TooltipItem = { dataKey?: string | number; value?: number };
type CustomTooltipProps = { active?: boolean; payload?: TooltipItem[]; label?: string | number };

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;
  const k24 = payload.find((p: TooltipItem) => String(p.dataKey) === "k24")?.value as number | undefined;
  const k22 = payload.find((p: TooltipItem) => String(p.dataKey) === "k22")?.value as number | undefined;
  return (
    <div className="rounded-md border border-white/10 bg-black/70 px-3 py-2 shadow-xl backdrop-blur-md text-white">
      <div className="text-xs opacity-80">{String(label)}</div>
      <div className="mt-1 text-[13px]">
        <div>
          <Square size={12} className="mr-2 inline-block" fill="var(--color-brand-blue-500)" />24K: <strong>{inr.format(k24 ?? 0)}</strong>
        </div>
        <div>
          <Square size={12} className="mr-2 inline-block" fill="var(--color-brand-gold)" />22K: <strong>{inr.format(k22 ?? 0)}</strong>
        </div>
      </div>
    </div>
  );
};

// Chart component
export default function GoldRateChart({ data }: GoldRateChartProps) {
  // Calculate an average reference value (mid of min/max of 24k) to mimic the dotted line in the mock
  const prices = data.map((d) => d.k24);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const avg = Math.round((min + max) / 2);

  return (
    <div className="w-full h-[360px] sm:h-[420px] md:h-[480px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 10 }}>
          <defs>
            <linearGradient id="k24Fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="var(--color-brand-blue-500)" stopOpacity={0.6} />
              <stop offset="95%" stopColor="var(--color-brand-blue-500)" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="k22Fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="var(--color-brand-gold)" stopOpacity={0.6} />
              <stop offset="95%" stopColor="var(--color-brand-gold)" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
          <XAxis dataKey="time" tick={{ fill: "#ffffff", opacity: 0.8, fontSize: 12 }} tickMargin={8} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#ffffff", opacity: 0.7, fontSize: 12 }} width={52} axisLine={false} tickLine={false} tickFormatter={(n) => inr.format(n as number)} />

          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#fff", strokeOpacity: 0.1 }} />

          <ReferenceLine y={avg} stroke="#ffffff" strokeDasharray="4 4" strokeOpacity={0.35} />

          <Area type="monotone" dataKey="k24" stroke="var(--color-brand-blue-500)" strokeWidth={2}
            fillOpacity={1} fill="url(#k24Fill)" />
          <Area type="monotone" dataKey="k22" stroke="var(--color-brand-gold)" strokeWidth={2}
            fillOpacity={1} fill="url(#k22Fill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

