import { prisma } from "../config/prisma";

import { IProductRepository, CreateProducts } from "../interfaces/IProductsRepository";

export class PrismaProductsRepository implements IProductRepository{

  async create(data: CreateProducts) {
    const { userId, ...rest } = data;

    return await prisma.order.create({
      data: {
        ...rest,

        user: {
          connect: { id: userId },
        },
    }});
  }
  
    async findById(id: string) {
        return prisma.product.findUnique({
            where: {
                id
            }
        })
    }
}