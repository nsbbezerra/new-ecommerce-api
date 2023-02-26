export interface ReviewsEntity {
  id: string;
  client: { name: string };
  headline: string;
  content: string;
  rating: number;
  created_at: Date;
}
