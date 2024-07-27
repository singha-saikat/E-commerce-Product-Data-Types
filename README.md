# E-commerce Product and Order API Management

A comprehensive API management system for handling e-commerce products and orders, built with Node.js, Express, and MongoDB. This project is designed for learning and practicing backend development, database management, and API design.

## ✨ Features

- **Product Management:**

  - Add Products: Create new products with details such as name, description, price, category, tags, variants, and inventory.
  - Edit Products: Update existing product details.
  - Delete Products: Remove products from the catalog.
  - Get Single Product: Retrieve details of a specific product by its ID.
  - Search Products: Search for products by name.

- **Order Management:**

  - Create Orders: Place new orders with product details and quantities.
  - Retrieve Orders: Get orders by user email.
  - Delete Orders: Remove orders by their ID.
  - Inventory Update: Automatically update product inventory upon order creation.

- **Error Handling:**
  - Invalid Route Handling: Return a custom error message for invalid routes.

## 🚀 Technologies Used

- **Client:** Not applicable (API project)
- **Server:** Node.js, Express
- **Database:** MongoDB
- **TypeScript:** Typed JavaScript at any scale.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.

## 📦 Installation

Clone the repository:

````bash
git clone https://github.com/singha-saikat/E-commerce-Product-Data-Types.git
cd E-commerce-Product-Data-Types


- Install dependencies:
yarn install

- Start the application:
yarn dev

- Open your browser:
Navigate to http://localhost:8080 to view the app.


## API Endpoints

### Product Management

#### 1. Create a New Product

**Endpoint:** `/api/products`
**Method:** POST

**Sample Request Body:**

```json
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}

## Sample Response:
{
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
## Inventory Management

### Inventory Update Logic

When creating a new order (`/api/orders`), the following steps should be taken to update the inventory:

1. **Check Available Quantity:**
   - Verify if the available quantity in inventory is sufficient to fulfill the order.
   - If the ordered quantity exceeds the available quantity, return an error response indicating insufficient stock.

2. **Update Inventory:**
   - **Reduce the Quantity:** Decrease the quantity of the ordered product in the inventory by the ordered amount.
   - **Update `inStock` Status:**
     - If the remaining inventory quantity is zero, set the `inStock` property to `false`.
     - If the remaining inventory quantity is greater than zero, keep the `inStock` property as `true`.

### Sample Error Response for Insufficient Stock

If the ordered quantity exceeds the available quantity, the API should return the following error response:

```json
{
    "success": false,
    "message": "Insufficient quantity available in inventory"
}



## 🚀 About Me
I'm a full stack developer...


## 🔗 Links
[![github](https://github.com/singha-saikat)


````
