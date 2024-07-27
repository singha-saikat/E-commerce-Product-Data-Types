import { z } from "zod";

// Variant Schema
const variantSchema = z.object({
  type: z.string().min(1, "Variant type is required"),
  value: z.string().min(1, "Variant value is required"),
});

// Inventory Schema
const inventorySchema = z.object({
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
  inStock: z.boolean(),
});

// Product Schema
const productZodValidationSchema = z.object({
  // id: z.string().min(1, "Product id is required"),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Product description is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  category: z.string().min(1, "Product category is required"),
  tags: z.array(z.string().min(1, "Tag must be a non-empty string")),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export { productZodValidationSchema };
