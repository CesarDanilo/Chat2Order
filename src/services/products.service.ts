import { prisma } from "../config/prisma";
import { IProductRepository, CreateProducts, UpdateProducts } from "../interfaces/IProductsRepository";


export class ProductServices {
    constructor(private orderRepository: IProductRepository) { }

    async CreateProducts(data: CreateProducts, userId: string) {
        data.userId = userId;
        return await this.orderRepository.create(data);
    }

    async GetProductsById(userId: string) {
        return await this.orderRepository.findById(userId);
    }

    async UpdateProduct(id: string, data: UpdateProducts) {
        return await this.orderRepository.update(id, data);
    }
}