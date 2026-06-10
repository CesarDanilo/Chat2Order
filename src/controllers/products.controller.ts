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

    async GetProductsByUser(req: Request, res: Response) {
        const productsRepository = new PrismaProductsRepository();
        const productsService = new ProductServices(productsRepository);

        try {
            const product = await productsService.GetProductsByUser((req as any).user.id);

            if (!product || product.length === 0) {
                return res.status(404).json({
                    message: "Nenhum produto encontrado"
                })
            }

            return res.json(product)
        } catch (error: any) {
            return res.status(500).json({
                error: "Error processing Product",
                message: error.message,
            });
        }
    }

    async UpdateProducts(req: Request, res: Response) {
        const productsRepository = new PrismaProductsRepository();
        const productsService = new ProductServices(productsRepository);

        try {
            const product = await productsService.UpdateProduct((req.params as any).id, req.body)
            return res.json(product);
        } catch (error: any) {
            return res.status(500).json({
                error: "Error processing Product",
                message: error.message,
            });
        }
    }

    async GetProductById(req: Request, res: Response) {
        const productsRepository = new PrismaProductsRepository();
        const productsService = new ProductServices(productsRepository);

        try {
            const product = await productsService.GetProductById((req.params as any).id)
            return res.json(product);
        } catch (error: any) {
            return res.status(500).json({
                error: "Error processing Product",
                message: error.message,
            });
        }
    }
}