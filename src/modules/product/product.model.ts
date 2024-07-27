import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// Variant Schema
const variantSchema = new Schema<TVariant>({
    type: { type: String, required: [true, "Variant type is required"] },
    value: { type: String, required: [true, "Variant value is required"] },
  });
  
  // Inventory Schema
  const inventorySchema = new Schema<TInventory>({
    quantity: { type: Number, required: [true, "Inventory quantity is required"] },
    inStock: { type: Boolean, required: [true, "Inventory in-stock status is required"] },
  });
  
  // Product Schema
  const productSchema = new Schema<TProduct>({
    // id:{type: String,required: [true, "Product id is required"] },
    name: { type: String, required: [true, "Product name is required"] },
    description: { type: String, required: [true, "Product description is required"] },
    price: { type: Number, required: [true, "Product price is required"] },
    category: { type: String, required: [true, "Product category is required"] },
    tags: { type: [String], required: [true, "Product tags are required"] },
    variants: { type: [variantSchema], required: [true, "Product variants are required"] },
    inventory: { type: inventorySchema, required: [true, "Product inventory is required"] },
  });
  
  const Product = model<TProduct>("Product", productSchema);
  
  export { Product };