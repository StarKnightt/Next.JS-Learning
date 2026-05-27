"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "nextjs-learning-progress";

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompleted(new Set(JSON.parse(stored)));
      }
    } catch {}
    setLoaded(true);
  }, []);

  const toggle = useCallback((slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isCompleted = useCallback((slug: string) => completed.has(slug), [completed]);

  return { completed, loaded, toggle, isCompleted, count: completed.size };
}
