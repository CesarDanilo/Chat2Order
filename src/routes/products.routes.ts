import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";
import { authMiddleware } from "../middleware/authUser";

const router = Router();
const productsController = new ProductsController();

router.get("/product", authMiddleware, productsController.GetProductsByUser);
router.get("/product/:id", authMiddleware, productsController.GetProductById);
router.post("/product", authMiddleware, productsController.CreateProducts);
router.put("/product/:id", authMiddleware, productsController.UpdateProducts);

export default router;
