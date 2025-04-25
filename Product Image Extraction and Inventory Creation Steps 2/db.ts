// This is a simplified version without Cloudflare dependencies for static deployment

export interface Product {
  id: string;
  name: string;
  description?: string;
  image_path: string;
}

export interface ProductVariant {
  id: number;
  product_id: string;
  quality: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

// Mock data for static deployment
const mockProducts: Product[] = [
  {
    id: 'GS001',
    name: 'Godspeed Urban Tee 1',
    description: 'Godspeed Urban Tee 1 - Urban style apparel for the modern youth.',
    image_path: '/organized_products/godspeed/product_001.jpg'
  },
  {
    id: 'GS002',
    name: 'Godspeed Urban Tee 2',
    description: 'Godspeed Urban Tee 2 - Urban style apparel for the modern youth.',
    image_path: '/organized_products/godspeed/product_002.jpg'
  },
  {
    id: 'ADG001',
    name: 'ADG Urban Collection 1',
    description: 'ADG Urban Collection 1 - Urban style apparel for the modern youth.',
    image_path: '/organized_products/adg/product_021.jpg'
  },
  {
    id: 'ADG002',
    name: 'ADG Urban Collection 2',
    description: 'ADG Urban Collection 2 - Urban style apparel for the modern youth.',
    image_path: '/organized_products/adg/product_022.jpg'
  }
];

const mockVariants: ProductVariant[] = [
  {
    id: 1,
    product_id: 'GS001',
    quality: 'Standard',
    size: 'M',
    color: 'Black',
    quantity: 25,
    price: 29.99
  },
  {
    id: 2,
    product_id: 'GS001',
    quality: 'Premium',
    size: 'L',
    color: 'White',
    quantity: 15,
    price: 39.99
  },
  {
    id: 3,
    product_id: 'ADG001',
    quality: 'Deluxe',
    size: 'XL',
    color: 'Black',
    quantity: 10,
    price: 49.99
  }
];

export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = mockProducts.find(p => p.id === id);
  return product || null;
}

export async function getProductVariants(productId: string): Promise<ProductVariant[]> {
  return mockVariants.filter(v => v.product_id === productId);
}

export async function getAllProductVariants(): Promise<ProductVariant[]> {
  return mockVariants;
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<string> {
  // This would normally create a product in the database
  // For static deployment, we just return a mock ID
  return 'new-product-id';
}

export async function createProductVariant(variant: Omit<ProductVariant, 'id'>): Promise<number> {
  // This would normally create a product variant in the database
  // For static deployment, we just return a mock ID
  return mockVariants.length + 1;
}

export async function updateProductVariantQuantity(id: number, quantity: number): Promise<void> {
  // This would normally update a product variant in the database
  // For static deployment, this is a no-op
}

export async function searchProducts(query: string): Promise<Product[]> {
  // This would normally search products in the database
  // For static deployment, we just return all products
  return mockProducts;
}
