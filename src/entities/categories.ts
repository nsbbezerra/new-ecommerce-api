export interface CategoriesEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  thumbnail: string | null;
  created_at: Date;
}
