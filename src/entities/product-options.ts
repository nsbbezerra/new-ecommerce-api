export interface ProductOptionsEntity {
  id: string;
  headline: string;
  content: string;
  type: 'STOCK' | 'WITHOUT';
  stock: number | null;
  created_at: Date;
  product_id: string | null;
}
