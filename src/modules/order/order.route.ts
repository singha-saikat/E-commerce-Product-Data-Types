import { Router } from "express";
import { orderControler } from "./order.controler";

const router = Router();

router.post('/orders',orderControler.createOrder)
router.get('/orders',orderControler.getOrders)
router.get('/orders',orderControler.getOrdersByEmail)

export const orderRoutes = router;