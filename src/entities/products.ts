import { Prisma } from '@prisma/client';

export interface ProductsEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail: string | null;
  description: string;
  price: Prisma.Decimal;
  request: number;
  promotional: boolean;
  promo_rate: number;
  shipping_info: Prisma.JsonValue;
  freight_priority: 'FAST' | 'NORMAL';
  created_at: Date;
  category_id: string;
  collection_id: string;
}

export interface ProductsWithRelationshipEntity {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  short_description: string | null;
  thumbnail: string | null;
  description: string;
  price: Prisma.Decimal;
  request: number;
  promotional: boolean;
  promo_rate: number;
  shipping_info: Prisma.JsonValue;
  freight_priority: 'FAST' | 'NORMAL';
  created_at: Date;
  category: { id: string; name: string };
  collection: { id: string; name: string };
}
