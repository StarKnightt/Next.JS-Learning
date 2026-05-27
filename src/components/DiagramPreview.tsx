"use client";

import { useState, useCallback, useEffect } from "react";

export function DiagramPreview({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-zoom-in relative group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(true);
        }}
      >
        {children}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity brutal-border bg-white px-3 py-1.5 text-sm font-bold shadow-lg">
            Click to expand
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-5xl max-h-[90vh] brutal-border bg-white p-6 brutal-shadow-lg overflow-auto animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <button
                onClick={close}
                className="brutal-border w-10 h-10 flex items-center justify-center font-bold text-lg hover:bg-brutal-red transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="w-full overflow-auto">
              {children}
            </div>

            <p className="text-xs opacity-50 mt-4 text-center">
              Press Escape or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
