"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export type RateInfo = {
  title: string; // e.g., "24K GOLD"
  price: number; // per 10 grams or per gram (label provided separately)
  unit: string; // e.g., "per 10 grams"
  change: number; // absolute change
  changePct: number; // percentage change
};

export interface RateCardsProps {
  left: RateInfo;
  right: RateInfo;
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function RateCards({ left, right }: RateCardsProps) {
  const Card = ({ item, highlight }: { item: RateInfo; highlight?: boolean }) => {
    const isUp = item.change >= 0;
    return (
      <div
        className={
          "shine rounded-xl border px-5 py-4 text-white shadow-2xl backdrop-blur-md " +
          (highlight
            ? "border-[--color-brand-blue-500] bg-[rgba(1,92,231,0.18)]/80"
            : "border-white/10 bg-black/50")
        }
      >
        <div className="text-[11px] tracking-widest opacity-80">{item.title}</div>
        <div className="mt-1 flex items-end gap-3">
          <div className="text-2xl sm:text-3xl font-semibold">
            {inr.format(item.price)}
          </div>
          <div className="text-xs opacity-75 mb-1">{item.unit}</div>
        </div>
        <div className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${isUp ? "text-emerald-400" : "text-rose-400"}`}>
          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>
            {isUp ? "+" : "-"}
            {Math.abs(item.change)} ({Math.abs(item.changePct).toFixed(2)}%)
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Card item={left} highlight />
      <Card item={right} />
    </div>
  );
}
