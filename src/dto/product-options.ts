export interface ProductOptionsDto {
  id: string;
  headline: string;
  content: string;
  type: 'STOCK' | 'WITHOUT';
  stock: number | null;
  product_id: string | null;
}
