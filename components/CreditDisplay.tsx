"use client";

import { useEffect, useState } from "react";

export default function CreditDisplay() {
  const [credits, setCredits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCredits() {
      try {
        const res = await fetch("/api/credits");
        if (!res.ok) throw new Error("Failed to fetch credits");
        const data = await res.json();
        setCredits(data.credits ?? 0);
      } catch (err) {
        console.error("Error fetching credits:", err);
        setCredits(0);
      } finally {
        setLoading(false);
      }
    }
    fetchCredits();
  }, []);

  return (
    <div className="credit-display">
      {loading ? (
        <p className="credit-text">Loading credits...</p>
      ) : (
        <p className="credit-text">
          <span className="credit-label">Credits:</span>{" "}
          <span className="credit-value">
            {credits !== null ? credits : 0}
          </span>
        </p>
      )}
    </div>
  );
          }
