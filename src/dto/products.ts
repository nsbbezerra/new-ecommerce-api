export interface ProductsDto {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail: string | null;
  description: string;
  price: number | string;
  request: number;
  promotional: boolean;
  promo_rate: number;
  shipping_info: {
    width: number;
    lenght: number;
    height: number;
    weight: number;
  };
  freight_priority: 'FAST' | 'NORMAL';
  category_id: string;
  collection_id: string;
}
