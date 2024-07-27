// order.zod.ts

import { z } from "zod";

const orderZodValidationSchema = z.object({
  email: z.string().email("Invalid email format"),
  productId: z.string().min(1, "Product ID is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

export { orderZodValidationSchema };
