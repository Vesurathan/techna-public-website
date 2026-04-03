import type { PublicGalleryCategory, PublicGalleryImage, PublicModule, PublicStaff } from "./types";

function apiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "http://127.0.0.1:8000/api/v1";
}

export async function fetchPublicModules(): Promise<PublicModule[]> {
  try {
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
  } catch (e) {
    console.warn(
      "Public modules API unreachable (is the backend running?)",
      e instanceof Error ? e.message : e
    );
    return [];
  }
}

export async function fetchPublicStaff(): Promise<PublicStaff[]> {
  try {
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
  } catch (e) {
    console.warn(
      "Public staff API unreachable (is the backend running?)",
      e instanceof Error ? e.message : e
    );
    return [];
  }
}

export async function fetchPublicStaffById(id: string): Promise<PublicStaff | null> {
  try {
    const res = await fetch(`${apiBase()}/public/staff/${id}`, {
      next: { revalidate: 120 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.staff ?? null) as PublicStaff | null;
  } catch {
    return null;
  }
}

export async function fetchPublicGalleryCategories(): Promise<PublicGalleryCategory[]> {
  try {
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
  } catch (e) {
    console.warn(
      "Public gallery categories API unreachable",
      e instanceof Error ? e.message : e
    );
    return [];
  }
}

export async function fetchPublicGalleryImages(categoryId: number): Promise<PublicGalleryImage[]> {
  try {
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
  } catch (e) {
    console.warn(
      "Public gallery images API unreachable",
      e instanceof Error ? e.message : e
    );
    return [];
  }
}

/** For client-side tab switches (no Next Data Cache). */
export async function fetchPublicGalleryImagesLive(categoryId: number): Promise<PublicGalleryImage[]> {
  try {
    const res = await fetch(`${apiBase()}/public/gallery/categories/${categoryId}/images`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.images ?? []) as PublicGalleryImage[];
  } catch {
    return [];
  }
}
