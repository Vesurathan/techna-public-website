import type { PublicGalleryCategory, PublicGalleryImage, PublicModule, PublicStaff } from "./types";

function apiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "http://127.0.0.1:8000/api/v1";
}

export async function fetchPublicModules(): Promise<PublicModule[]> {
  const res = await fetch(`${apiBase()}/public/modules`, {
    next: { revalidate: 120 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    console.warn("Public modules API failed", res.status);
    return [];
  }
  const data = await res.json();
  return (data.modules ?? []) as PublicModule[];
}

export async function fetchPublicStaff(): Promise<PublicStaff[]> {
  const res = await fetch(`${apiBase()}/public/staff`, {
    next: { revalidate: 120 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    console.warn("Public staff API failed", res.status);
    return [];
  }
  const data = await res.json();
  return (data.staff ?? []) as PublicStaff[];
}

export async function fetchPublicStaffById(id: string): Promise<PublicStaff | null> {
  const res = await fetch(`${apiBase()}/public/staff/${id}`, {
    next: { revalidate: 120 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.staff ?? null) as PublicStaff | null;
}

export async function fetchPublicGalleryCategories(): Promise<PublicGalleryCategory[]> {
  const res = await fetch(`${apiBase()}/public/gallery/categories`, {
    next: { revalidate: 60 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    console.warn("Public gallery categories API failed", res.status);
    return [];
  }
  const data = await res.json();
  return (data.categories ?? []) as PublicGalleryCategory[];
}

export async function fetchPublicGalleryImages(categoryId: number): Promise<PublicGalleryImage[]> {
  const res = await fetch(`${apiBase()}/public/gallery/categories/${categoryId}/images`, {
    next: { revalidate: 60 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    console.warn("Public gallery images API failed", res.status);
    return [];
  }
  const data = await res.json();
  return (data.images ?? []) as PublicGalleryImage[];
}

/** For client-side tab switches (no Next Data Cache). */
export async function fetchPublicGalleryImagesLive(categoryId: number): Promise<PublicGalleryImage[]> {
  const res = await fetch(`${apiBase()}/public/gallery/categories/${categoryId}/images`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.images ?? []) as PublicGalleryImage[];
}
