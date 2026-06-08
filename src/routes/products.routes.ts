import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";
import { authMiddleware } from "../middleware/authUser";

const router = Router();
const productsController = new ProductsController();

router.get("/product", authMiddleware, productsController.GetProductsById);
router.post("/product", authMiddleware, productsController.CreateProducts);

export default router;
