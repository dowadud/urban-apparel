import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { createProduct, createProductVariant } from './db';

interface ProductCSVRow {
  'Item Number': string;
  'Product Name': string;
  'Quality': string;
  'Size': string;
  'Color': string;
  'Quantity': string;
  'Price': string;
  'Image Path': string;
}

export async function importProductsFromCSV(csvFilePath: string): Promise<void> {
  // Read CSV file
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  }) as ProductCSVRow[];

  // Track products that have already been created
  const createdProducts = new Map<string, string>();

  // Process each record
  for (const record of records) {
    const itemNumber = record['Item Number'];
    
    // Check if we've already created this product
    if (!createdProducts.has(itemNumber)) {
      // Create the product
      const productId = await createProduct({
        name: record['Product Name'],
        description: `${record['Product Name']} - Urban style apparel for the modern youth.`,
        image_path: record['Image Path']
      });
      
      // Store the product ID
      createdProducts.set(itemNumber, productId);
    }
    
    // Get the product ID
    const productId = createdProducts.get(itemNumber)!;
    
    // Create the product variant
    await createProductVariant({
      product_id: productId,
      quality: record['Quality'],
      size: record['Size'],
      color: record['Color'],
      quantity: parseInt(record['Quantity'], 10),
      price: parseFloat(record['Price'])
    });
  }
  
  console.log(`Imported ${records.length} product variants for ${createdProducts.size} unique products`);
}
