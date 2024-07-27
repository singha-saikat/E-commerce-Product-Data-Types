import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productsRoutes } from "./modules/product/product.route";
import { orderRoutes } from "./modules/order/order.route";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use('/api',productsRoutes);

// order routes
app.use('/api',orderRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
