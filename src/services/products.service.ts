import { prisma } from "../config/prisma";
import { IProductRepository, CreateProducts, UpdateProducts } from "../interfaces/IProductsRepository";


export class ProductServices {
    constructor(private orderRepository: IProductRepository) { }

    async CreateProducts(data: CreateProducts, userId: string) {
        data.userId = userId;
        return await this.orderRepository.create(data);
    }

    async GetProductsByUser(userId: string) {
        return await this.orderRepository.findAllByUser(userId);
    }

    async UpdateProduct(id: string, data: UpdateProducts) {
        return await this.orderRepository.update(id, data);
    }

    async GetProductById(id: string) {
        return await this.orderRepository.findById(id);
    }

    async DeleteProductById(id: string) {
        return await this.orderRepository.delete(id);
    }
}