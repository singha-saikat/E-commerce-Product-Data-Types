// Define a Variant type
export type TVariant = {
    type: string;
    value: string;
  };
  
  // Define an Inventory type
  export type TInventory = {
    quantity: number;
    inStock: boolean;
  };
  
  // Define the main Product type
  export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
  };