import { prisma } from "../config/prisma";
import { IProductRepository, CreateProducts } from "../interfaces/IProductsRepository";


export class ProductCreate {
    constructor(private orderRepository: IProductRepository){}

    async CreateProducts(data: CreateProducts){
        return await this.orderRepository.create(data)
    }
}