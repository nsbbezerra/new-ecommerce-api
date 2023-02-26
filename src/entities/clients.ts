export interface GetAllClientsEntity {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  created_at?: Date | string;
}

export interface ClientsEntity {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  created_at: Date;
}

export interface ClientsLoginEntity {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  password: string;
  created_at: Date;
}
