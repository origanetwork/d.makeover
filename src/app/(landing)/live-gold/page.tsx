import dynamic from "next/dynamic";
import Image from "next/image";

import RateCards, { RateInfo } from "../_components/live-gold/RateCards";
import QuickCalculator from "../_components/live-gold/QuickCalculator";
import type { GoldPoint } from "../_components/live-gold/GoldRateChart";

// Recharts components can be picky with SSR. Use dynamic import to render client-side only.
const GoldRateChart = dynamic(() => import("../_components/live-gold/GoldRateChart"));

// Mock series data to resemble the UI. These are per-gram prices.
const chartData: GoldPoint[] = [
  { time: "9:00 am", k24: 6950, k22: 5230 },
  { time: "10:00 am", k24: 6080, k22: 5350 },
  { time: "11:00 am", k24: 6340, k22: 5400 },
  { time: "12:00 pm", k24: 6910, k22: 5285 },
  { time: "1:00 pm", k24: 6360, k22: 5520 },
  { time: "2:00 pm", k24: 6100, k22: 5155 },
  { time: "3:00 pm", k24: 6380, k22: 5740 },
  { time: "4:00 pm", k24: 6100, k22: 5470 },
  { time: "5:00 pm", k24: 6320, k22: 5630 },
  { time: "6:00 pm", k24: 8150, k22: 7820 },
];

// Current rate snapshot for cards (per 10 grams to match the mock copy)
const rate24: RateInfo = {
  title: "24K GOLD",
  price: 63500,
  unit: "per 10 grams",
  change: 150,
  changePct: 0.24,
};

const rate22: RateInfo = {
  title: "22K GOLD",
  price: 58200,
  unit: "per 10 grams",
  change: -75,
  changePct: -0.13,
};

export default function Page() {
  return (
    <main className="relative isolate min-h-[80vh] bg-[radial-gradient(80%_60%_at_30%_0%,rgba(1,92,231,0.25),transparent_50%),radial-gradient(60%_50%_at_80%_10%,rgba(255,204,51,0.12),transparent_40%)] pb-16">
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:pt-12">
       
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-[rgba(1,92,231,0.35)] bg-[rgba(0,0,0,0.55)] shadow-[0_0_40px_rgba(1,92,231,0.15)]">
        <h1 className="text-2xl text-center pt-10 font-semibold font-montserrat tracking-wide text-white sm:text-3xl">
          Live Gold Rate
        </h1>
          {/* Background image with blur and vignette */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src="/landing-page/service/buygoldservice.png"
              alt="Blurred gold trading background"
              fill
              priority
              className="object-cover opacity-50 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
          </div>

          {/* Top summary cards */}
          <div className="px-4 p-10 sm:px-6">
            <RateCards left={rate24} right={rate22} />
          </div>

          {/* Chart */}
          <div className="px-2 p-10 sm:px-4 ">
            <GoldRateChart data={chartData} />
          </div>

          {/* Floating quick calculator */}
          <div className="pointer-events-none w-full p-10 sm:px-0">
            <div className="pointer-events-auto mx-auto max-w-md">
              <QuickCalculator pricePerGram24k={6350} pricePerGram22k={5820} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

