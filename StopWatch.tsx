"use client";
import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="text-center p-3 border border-[#FFD700]/30 rounded-md bg-[#0D0D0D]">
      <h4 className="text-[#FFD700] font-semibold text-lg">Generation Timer</h4>
      <p className="text-[#00FFFF] text-2xl mt-2">{seconds}s</p>
      <div className="mt-3 flex justify-center gap-3">
        <button
          onClick={() => setRunning(true)}
          className="px-3 py-1 bg-[#FFD700] text-black rounded"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="px-3 py-1 bg-[#00FFFF] text-black rounded"
        >
          Stop
        </button>
        <button
          onClick={() => setSeconds(0)}
          className="px-3 py-1 bg-[#0B0B0B] border border-[#FFD700]/40 rounded text-[#FFD700]"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
