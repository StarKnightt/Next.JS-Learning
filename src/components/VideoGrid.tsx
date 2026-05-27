"use client";

import { useState, useEffect, useCallback } from "react";

interface Video {
  id: string;
  title: string;
  channel: string;
}

export function VideoGrid({ videos, title }: { videos: Video[]; title: string }) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const close = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo, close]);

  return (
    <>
      <div className="mt-12 brutal-border bg-white p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-brutal-red brutal-border flex items-center justify-center text-sm">▶</span>
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(video)}
              className="brutal-border-thin bg-gray-50 p-4 hover:bg-brutal-yellow/20 transition-colors group text-left cursor-pointer"
            >
              <div className="aspect-video mb-3 brutal-border-thin overflow-hidden bg-black relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-110 transition-transform">▶</span>
                </div>
              </div>
              <p className="font-bold text-sm">{video.title}</p>
              <p className="text-xs opacity-60 mt-1">{video.channel}</p>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-4xl animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-white">
                <p className="font-bold text-lg">{activeVideo.title}</p>
                <p className="text-sm opacity-60">{activeVideo.channel}</p>
              </div>
              <button
                onClick={close}
                className="brutal-border bg-white w-10 h-10 flex items-center justify-center font-bold text-lg hover:bg-brutal-red transition-colors flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="brutal-border bg-black overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <p className="text-xs text-white/40 mt-3 text-center">
              Press Escape or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
