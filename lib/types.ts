export interface PublicModuleStaff {
  id: number;
  fullName: string;
  imageUrl: string | null;
  qualifications: string | null;
}

export interface PublicModule {
  id: number;
  name: string;
  category: string;
  subModulesCount: number;
  amount: number;
  staff: PublicModuleStaff[];
}

export interface PublicStaffModule {
  id: number;
  name: string;
  category: string;
}

export interface PublicStaff {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  schoolName: string | null;
  qualifications: string | null;
  imageUrl: string | null;
  modules: PublicStaffModule[];
}

export interface PublicGalleryCategory {
  id: number;
  name: string;
  sort_order: number;
  images_count: number;
}

export interface PublicGalleryImage {
  id: number;
  url: string;
  original_name: string | null;
}
