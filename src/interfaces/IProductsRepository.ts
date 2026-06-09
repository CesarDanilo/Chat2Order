import { Product } from "@prisma/client";

export interface CreateProducts {
  userId: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  available?: boolean;
}

export interface IProductRepository {
    create(data: CreateProducts): Promise<Product>;
    findById(userId: string): Promise<Product | null>;
}
