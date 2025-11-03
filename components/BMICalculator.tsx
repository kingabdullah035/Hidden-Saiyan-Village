"use client";

import { useState, useMemo } from "react";

type System = "metric" | "imperial";

export default function BMICalculator() {
  // Imperial is default
  const [system, setSystem] = useState<System>("imperial");

  // metric
  const [kg, setKg] = useState<string>("");
  const [cm, setCm] = useState<string>("");

  // imperial
  const [lb, setLb] = useState<string>("");
  const [ft, setFt] = useState<string>("");
  const [inch, setInch] = useState<string>("");

  const result = useMemo(() => {
    let weightKg = 0;
    let heightM = 0;

    if (system === "metric") {
      const kgNum = Number(kg);
      const cmNum = Number(cm);
      if (kgNum > 0 && cmNum > 0) {
        weightKg = kgNum;
        heightM = cmNum / 100;
      }
    } else {
      const lbNum = Number(lb);
      const ftNum = Number(ft);
      const inNum = Number(inch);
      if (lbNum > 0 && (ftNum > 0 || inNum > 0)) {
        weightKg = lbNum * 0.45359237;
        const cmTotal = ftNum * 30.48 + inNum * 2.54;
        heightM = cmTotal / 100;
      }
    }

    if (weightKg > 0 && heightM > 0) {
      const bmi = weightKg / (heightM * heightM);
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      return { bmi: Number(bmi.toFixed(1)), category };
    }
    return null;
  }, [system, kg, cm, lb, ft, inch]);

  return (
    <div
      className="
        rounded-2xl border border-zinc-700/60 bg-zinc-900/40
        p-6 shadow-[0_0_25px_rgba(0,0,0,0.3)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white leading-tight">
            Quick BMI Calculator
          </h3>
          <p className="text-[11px] text-zinc-500 leading-snug">
            Scanner mode • estimates only
          </p>
        </div>

        {/* System toggle — Imperial first */}
        <div className="flex gap-2 text-xs">
          <button
            type="button"
            onClick={() => setSystem("imperial")}
            className={`px-3 py-1 rounded-md border transition-colors ${
              system === "imperial"
                ? "border-red-500/60 text-red-400 bg-red-500/10 shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                : "border-zinc-700/60 text-zinc-400 hover:border-red-500/40 hover:text-red-400"
            }`}
          >
            Imperial
          </button>
          <button
            type="button"
            onClick={() => setSystem("metric")}
            className={`px-3 py-1 rounded-md border transition-colors ${
              system === "metric"
                ? "border-blue-500/60 text-blue-400 bg-blue-500/10 shadow-[0_0_10px_rgba(0,140,255,0.4)]"
                : "border-zinc-700/60 text-zinc-400 hover:border-blue-500/40 hover:text-blue-400"
            }`}
          >
            Metric
          </button>
        </div>
      </div>

      {/* Inputs */}
      {system === "metric" ? (
        <div className="grid grid-cols-2 gap-3 mt-4">
          <label className="flex flex-col text-sm text-zinc-200">
            Weight (kg)
            <input
              value={kg}
              onChange={(e) => setKg(e.target.value)}
              inputMode="decimal"
              className="mt-1 rounded-md bg-black border border-zinc-700 px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="e.g., 77"
            />
          </label>
          <label className="flex flex-col text-sm text-zinc-200">
            Height (cm)
            <input
              value={cm}
              onChange={(e) => setCm(e.target.value)}
              inputMode="decimal"
              className="mt-1 rounded-md bg-black border border-zinc-700 px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500"
              placeholder="e.g., 173"
            />
          </label>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 mt-4">
          <label className="flex flex-col text-sm text-zinc-200">
            Weight (lb)
            <input
              value={lb}
              onChange={(e) => setLb(e.target.value)}
              inputMode="decimal"
              className="mt-1 rounded-md bg-black border border-zinc-700 px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500"
              placeholder="e.g., 170"
            />
          </label>
          <label className="flex flex-col text-sm text-zinc-200">
            Height (ft)
            <input
              value={ft}
              onChange={(e) => setFt(e.target.value)}
              inputMode="numeric"
              className="mt-1 rounded-md bg-black border border-zinc-700 px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500"
              placeholder="5"
            />
          </label>
          <label className="flex flex-col text-sm text-zinc-200">
            Height (in)
            <input
              value={inch}
              onChange={(e) => setInch(e.target.value)}
              inputMode="numeric"
              className="mt-1 rounded-md bg-black border border-zinc-700 px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500"
              placeholder="8"
            />
          </label>
        </div>
      )}

      {/* Results */}
      <div className="mt-4 text-sm">
        <p className="font-semibold text-blue-400">
          BMI:{" "}
          <span className="text-white">
            {result ? `${result.bmi} (${result.category})` : "--"}
          </span>
        </p>
        <p className="text-[11px] text-zinc-500 mt-2 leading-snug">
          Example: 170 lb & 5′8″ → BMI ≈ 25.8
        </p>
      </div>
    </div>
  );
}
