export interface MasterUserEntity {
  id: string;
  active: boolean;
  user: string;
  password?: string;
  created_at: Date;
}
