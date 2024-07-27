import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (data: TOrder) => {
  const { productId, quantity } = data;
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient stock");
  }
  product.inventory.quantity -= quantity;
  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
  }
  await product.save();

  const order = new Order(data);
  return await order.save();
};

const getOrders = async () => {
  const result = await Order.find();
  return result;
};

const getOrdersByEmail = async (email: string) => {
  return await Order.find({ email });
};

export const orderService = {
  createOrder,
  getOrders,
  getOrdersByEmail,
};
