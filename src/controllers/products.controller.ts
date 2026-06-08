import { Request, Response } from "express";
import { ProductServices } from "../services/products.service";
import { PrismaProductsRepository } from "../repository/PrismaProductsRepository";

export class ProductsController {
    async CreateProducts(req: Request, res: Response) {
        const productsRepository = new PrismaProductsRepository();
        const productsService = new ProductServices(productsRepository);

        try {
            const userId = (req as any).user.id;
            const product = await productsService.CreateProducts(req.body, userId);
            return res.json(product);
        } catch (error: any) {
            return res.status(500).json({
                error: "Error processing Product",
                message: error.message,
            });
        }
    }

    async GetProductsById(req: Request, res: Response) {
        const productsRepository = new PrismaProductsRepository();
        const productsService = new ProductServices(productsRepository);

        try {
            const id = String(req.params.id);
            const product = await productsService.GetProductsById(id);

            if(!product){
                return res.status(404).json({
                    message: "Produto não encontrado"
                })
            }
        } catch (error: any) {
            return res.status(500).json({
                error: "Error processing Product",
                message: error.message,
            });
        }
    }
}