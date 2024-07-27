import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (data: TOrder) => {
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
    getOrdersByEmail
}