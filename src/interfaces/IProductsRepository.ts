import { Product } from "@prisma/client";

export interface CreateProducts {
  userId: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  available?: boolean;
}

export interface UpdateProducts {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  available?: boolean;
}

export interface IProductRepository {
  create(data: CreateProducts): Promise<Product>;
  findAllByUser(userId: string): Promise<Product[]>;
  findById(productId: string): Promise<Product | null>;
  update(productId: string, data: UpdateProducts): Promise<Product>;
  delete(productId: string): Promise<Product>;
}