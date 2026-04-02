"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ImageIcon, Loader2 } from "lucide-react";
import { fetchPublicGalleryImagesLive } from "@/lib/api";
import type { PublicGalleryCategory, PublicGalleryImage } from "@/lib/types";
import { FadeIn } from "@/components/motion-reveal";
import { AnimatedButton } from "@/components/animated-button";
import { cn } from "@/lib/utils";

type Props = {
  initialCategories: PublicGalleryCategory[];
};

export function GalleryClient({ initialCategories }: Props) {
  const categories = initialCategories;
  const [activeId, setActiveId] = useState<number | null>(() => {
    const firstWithPhotos = categories.find((c) => c.images_count > 0);
    return (firstWithPhotos ?? categories[0])?.id ?? null;
  });
  const [images, setImages] = useState<PublicGalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [lightbox, setLightbox] = useState<PublicGalleryImage | null>(null);

  const loadImages = useCallback(async (categoryId: number) => {
    setLoading(true);
    try {
      const list = await fetchPublicGalleryImagesLive(categoryId);
      setImages(list);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeId != null) {
      void loadImages(activeId);
    } else {
      setImages([]);
    }
  }, [activeId, loadImages]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (categories.length === 0) {
    return (
      <FadeIn className="mt-14">
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-primary/25 bg-gradient-to-br from-primary/[0.06] via-card to-muted/40 px-8 py-16 text-center dark:from-primary/10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ImageIcon className="h-8 w-8" />
          </div>
          <p className="mt-6 font-display text-lg font-bold text-foreground">Photos coming soon</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Our gallery is being curated. Visit us at Veerasingam Hall, Jaffna, or{" "}
            <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
              get in touch
            </Link>{" "}
            to arrange a campus visit.
          </p>
          <div className="mt-8">
            <AnimatedButton href="/contact" variant="primary">
              Book a visit
            </AnimatedButton>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <>
      <FadeIn delay={0.06} className="mt-10">
        <div
          className="flex flex-wrap gap-2 border-b border-border pb-4"
          role="tablist"
          aria-label="Gallery categories"
        >
          {categories.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setActiveId(c.id)}
              >
                {c.name}
                <span className={cn("ml-1.5 tabular-nums opacity-80", isActive && "text-primary-foreground/90")}>
                  ({c.images_count})
                </span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8">
        {loading ? (
          <div className="flex min-h-[200px] items-center justify-center gap-2 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden />
            <span className="text-sm font-medium">Loading photos…</span>
          </div>
        ) : images.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border bg-card/50 py-16 text-center text-sm text-muted-foreground">
            No photos in this category yet.
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img) => (
              <li key={img.id}>
                <button
                  type="button"
                  className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm ring-primary/0 transition-shadow hover:ring-2 hover:ring-primary/30 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setLightbox(img)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.original_name || "Gallery photo"}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </FadeIn>

      {lightbox ? (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          aria-label="Close image"
          onClick={() => setLightbox(null)}
        >
          <span
            role="dialog"
            aria-modal="true"
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.url}
              alt={lightbox.original_name || "Gallery photo"}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
            {lightbox.original_name ? (
              <p className="border-t border-border bg-card px-4 py-2 text-center text-xs text-muted-foreground">
                {lightbox.original_name}
              </p>
            ) : null}
          </span>
        </button>
      ) : null}
    </>
  );
}
