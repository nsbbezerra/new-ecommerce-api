export interface ProductOptionsDto {
  id?: string;
  headline: string;
  content: string;
  stock: number | null;
  product_id?: string | null;
}
