import { prisma } from "../config/prisma";

import { IProductRepository, CreateProducts } from "../interfaces/IProductsRepository";

export class PrismaProductsRepository implements IProductRepository{
    async create(data: CreateProducts){
        return prisma.product.create({
            data
        });
    }

    async findById(id: string) {
        return prisma.product.findUnique({
            where: {
                id
            }
        })
    }
}