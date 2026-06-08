import { Product } from "@prisma/client";

export interface CreateProducts {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    available: boolean;
    createdAt: Date;
}


export interface IProductRepository {
    create(data: CreateProducts): Promise<Product>;
    findById(id: string): Promise<Product | null>;
}
