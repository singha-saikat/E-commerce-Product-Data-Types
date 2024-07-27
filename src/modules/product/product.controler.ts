/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { productZodValidationSchema } from "./productZod.validation";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    productZodValidationSchema.parse(req.body);
    const product = await ProductService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product is created successfully",
      data: product,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to create student",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products data is found",
      data: products,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Products data is not found",
    });
  }
};

const getASingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getASingleProduct(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Product id: ${productId}, data is not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: ` Product id: ${productId}, data is found sucessfully`,
      data: result,
    });
  } catch (err) {
    const { productId } = req.params;
    res.status(500).json({
      success: false,
      message: ` Product id: ${productId}, data is not found`,
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProduct(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Product id: ${productId}, data not found for deletion`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err: any) {
    const { productId } = req.params;
    res.status(500).json({
      success: false,
      message: `Error deleting product id: ${productId}`,
      error: err.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await ProductService.updateProduct(productId, updateData);

    if (!result) {
      return res.status(404).json(result);
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: `Error updating product id: ${req.params.productId}`,
      error: err.message,
      data: null,
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    const results = await ProductService.searchProducts(searchTerm);

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: results,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: err.message,
    });
  }
};

export const ProductControler = {
  createProduct,
  getAllProducts,
  getASingleProducts,
  deleteProduct,
  updateProduct,
  searchProducts,
};
