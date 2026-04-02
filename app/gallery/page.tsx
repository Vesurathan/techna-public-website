import type { Metadata } from "next";
import { SlideIn } from "@/components/motion-reveal";
import { fetchPublicGalleryCategories } from "@/lib/api";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Campus life, events, and learning moments at Techna Technical Institute, Jaffna.",
};

export default async function GalleryPage() {
  const categories = await fetchPublicGalleryCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Campus life</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Gallery
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Explore photos from workshops, practical sessions, celebrations, and everyday learning at Techna. Choose a
          category to view images.
        </p>
      </SlideIn>

      <GalleryClient initialCategories={categories} />
    </div>
  );
}
