import { prisma } from "../config/prisma";
import { IProductRepository, CreateProducts, UpdateProducts } from "../interfaces/IProductsRepository";

export class PrismaProductsRepository implements IProductRepository {

  async create(data: CreateProducts) {
    const { userId, ...rest } = data;

    return prisma.product.create({
      data: {
        ...rest,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findById(productId: string) {
    return prisma.product.findUnique({
      where: { id: productId },
    });
  }

  async findAllByUser(userId: string) {
    return prisma.product.findMany({
      where: { userId },
    });
  }

  async update(productId: string, data: UpdateProducts) {
    return prisma.product.update({
      where: {
        id: productId,
      },
      data,
    });
  }

  async delete(productId: string) {
    return prisma.product.delete({
      where: {
        id: productId,
      }
    })
  }
}