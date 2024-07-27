import { Router } from "express";
import { ProductControler } from "./product.controler";


const router = Router();

router.post('/products',ProductControler.createProduct);
router.get('/products', ProductControler.getAllProducts);
router.get('/products/:productId',ProductControler.getASingleProducts);
router.delete('/products/:productId',ProductControler.deleteProduct);
router.put('/products/:productId',ProductControler.updateProduct);


export const productsRoutes = router;