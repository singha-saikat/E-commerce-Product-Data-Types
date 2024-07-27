/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { orderService } from "./order.service";
import { TOrder } from "./order.interface";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData : TOrder = req.body;
    const newOrder = await orderService.createOrder(orderData);
    res
      .status(201)
      .json({
        success: true,
        message: "Order created successfully!",
        data: newOrder,
      });
  } catch (err: any) {
    if (err.message === 'Insufficient stock') {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
        data: null,
      });
    }
    res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: err.message,
      data: null,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();
    if (orders.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
          data: orders
        });
      }
    res
      .status(200)
      .json({
        success: true,
        message: "Orders fetched successfully!",
        data: orders,
      });
  } catch (err: any) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching orders",
        error: err.message,
      });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    
    const orders = await orderService.getOrdersByEmail(email);
    if (orders.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No orders found for user email: ${email}`,
          data: null
        });
      }
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: err.message,
      data: null,
    });
  }
};

export const orderControler = {
  createOrder,
  getOrders,
  getOrdersByEmail,
};
