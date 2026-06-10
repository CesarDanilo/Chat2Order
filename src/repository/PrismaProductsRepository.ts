import { prisma } from "../config/prisma";
import {
  IProductRepository,
  CreateProducts,
  UpdateProducts,
} from "../interfaces/IProductsRepository";

export class PrismaProductsRepository
  implements IProductRepository {

  async create(data: CreateProducts) {
    const { userId, ...rest } = data;

    return await prisma.product.create({
      data: {
        ...rest,

        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findById(userId: string) {
    return prisma.product.findMany({
      where: {
        userId,
      },
    });
  }

  async update(id: string, data: UpdateProducts){
    return prisma.product.update({
      where: { id },
      data
    })
  }
}