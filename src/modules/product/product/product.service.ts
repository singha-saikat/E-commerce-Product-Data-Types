import { TProduct } from "./product.interface";
import { Product } from "./product.model";
import { ObjectId } from 'mongodb';


const createProduct = async (productData : TProduct) => {
    const product = new Product(productData);
    return await product.save()
}

const getAllProducts = async () => {
    const result =await Product.find();
    return result;
};

const getASingleProduct = async (id : string) => {
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid product ID format');
      }
      const objectId = new ObjectId(id);
      const result = await Product.findById(objectId);
      return result;
}

const deleteProduct = async (id: string) => {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid product ID format');
    }
    const objectId = new ObjectId(id);
    const result = await Product.deleteOne(objectId);
    return result;
};

const updateProduct = async (id: string, updateData: TProduct) => {
    // Validate the ID
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid product ID format');
    }
    
    // Convert to ObjectId
    const objectId = new ObjectId(id);
    
    // Update the product
    const result = await Product.findByIdAndUpdate(objectId, updateData);
    return result;
};

const searchProducts = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i');
    const results = await Product.find({ name: { $regex: regex } });
    return results;
};



export const ProductService = {
    createProduct,
    getAllProducts,
    getASingleProduct,
    deleteProduct,
    updateProduct,
    searchProducts

}
