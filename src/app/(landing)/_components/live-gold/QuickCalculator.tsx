"use client";

import React, { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export interface QuickCalculatorProps {
  pricePerGram24k: number; // e.g., 6350
  pricePerGram22k: number; // e.g., 5820
}

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function QuickCalculator({ pricePerGram24k, pricePerGram22k }: QuickCalculatorProps) {
  const [grams, setGrams] = useState<string>("");
  const [purity, setPurity] = useState<"24K" | "22K">("24K");

  const pricePerGram = purity === "24K" ? pricePerGram24k : pricePerGram22k;

  const total = useMemo(() => {
    const g = parseFloat(grams);
    if (Number.isNaN(g) || g <= 0) return 0;
    return Math.round(g * pricePerGram);
  }, [grams, pricePerGram]);

  return (
    <div
      role="region"
      aria-labelledby="calculator-title"
      className="mx-auto w-full max-w-xl rounded-xl border border-white/15 bg-gradient-to-b from-white/40 to-black/10 p-4 text-white shadow-2xl backdrop-blur-md"
    >
      <div className="mb-3 flex items-center gap-2">
        <Calculator size={18} className="text-[--color-brand-gold]" />
        <h3 id="calculator-title" className="text-sm font-semibold tracking-wide">
          Quick Calculator
        </h3>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        aria-describedby="calc-help"
      >
        <div className="flex flex-col">
          <label htmlFor="grams" className="mb-1 text-xs opacity-80">
            Quantity (grams)
          </label>
          <input
            id="grams"
            inputMode="decimal"
            placeholder="Enter grams"
            value={grams}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGrams(e.target.value.replace(/[^0-9.]/g, ""))
            }
            className="h-10 rounded-md border border-white/15 bg-black/40 px-3 text-sm outline-none ring-0 placeholder:text-white/50 focus:border-[--color-brand-blue-500]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="purity" className="mb-1 text-xs opacity-80">
            Gold Purity
          </label>
          <select
            id="purity"
            value={purity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPurity(e.target.value as "24K" | "22K")
            }
            className="h-10 rounded-md border border-white/15 bg-black/40 px-3 text-sm outline-none ring-0 focus:border-[--color-brand-blue-500]"
          >
            <option value="24K">24K Gold</option>
            <option value="22K">22K Gold</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            type="button"
            className="shine inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-[#D4AF37] to-[#F2D267] px-4 py-2 text-sm font-semibold text-black shadow-lg transition active:translate-y-[1px]"
            aria-label="Get detailed quote"
          >
            Get Detailed Quote
          </button>
          <p id="calc-help" className="mt-2 text-xs opacity-80">
            Estimation at {inr.format(pricePerGram)} per gram. Quote: <span className="font-semibold">{inr.format(total)}</span>
          </p>
        </div>
      </form>
    </div>
  );
}
