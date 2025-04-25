import pandas as pd
import os
import random

# Create a directory for the inventory
os.makedirs('/home/ubuntu/inventory', exist_ok=True)

# Define product categories and their properties
godspeed_products = []
adg_products = []

# Quality options
quality_options = ["Standard", "Premium", "Deluxe"]

# Size options
size_options = ["S", "M", "L", "XL"]

# Color options for Godspeed line
godspeed_colors = ["Black", "White", "Pink", "Yellow", "Blue", "Green"]

# Color options for ADG line
adg_colors = ["Black", "White", "Grey", "Navy", "Beige"]

# Price ranges
godspeed_price_range = (25.99, 45.99)
adg_price_range = (29.99, 49.99)

# Generate inventory for Godspeed products
godspeed_image_files = os.listdir('/home/ubuntu/organized_products/godspeed/')
for i, image_file in enumerate(godspeed_image_files):
    item_number = f"GS{i+1:03d}"
    product_name = f"Godspeed Urban Tee {i+1}"
    image_path = f"/home/ubuntu/organized_products/godspeed/{image_file}"
    
    # Create entries for different quality, sizes, and colors
    for quality in quality_options:
        for color in random.sample(godspeed_colors, k=min(3, len(godspeed_colors))):
            for size in size_options:
                # Adjust price based on quality and size
                base_price = random.uniform(godspeed_price_range[0], godspeed_price_range[1])
                if quality == "Premium":
                    base_price += 5
                elif quality == "Deluxe":
                    base_price += 10
                
                if size == "L":
                    base_price += 2
                elif size == "XL":
                    base_price += 4
                
                price = round(base_price, 2)
                quantity = random.randint(5, 50)
                
                godspeed_products.append({
                    "Item Number": item_number,
                    "Product Name": product_name,
                    "Quality": quality,
                    "Size": size,
                    "Color": color,
                    "Quantity": quantity,
                    "Price": price,
                    "Image Path": image_path
                })

# Generate inventory for ADG products
adg_image_files = os.listdir('/home/ubuntu/organized_products/adg/')
for i, image_file in enumerate(adg_image_files):
    item_number = f"ADG{i+1:03d}"
    product_name = f"ADG Urban Collection {i+1}"
    image_path = f"/home/ubuntu/organized_products/adg/{image_file}"
    
    # Create entries for different quality, sizes, and colors
    for quality in quality_options:
        for color in random.sample(adg_colors, k=min(3, len(adg_colors))):
            for size in size_options:
                # Adjust price based on quality and size
                base_price = random.uniform(adg_price_range[0], adg_price_range[1])
                if quality == "Premium":
                    base_price += 5
                elif quality == "Deluxe":
                    base_price += 10
                
                if size == "L":
                    base_price += 2
                elif size == "XL":
                    base_price += 4
                
                price = round(base_price, 2)
                quantity = random.randint(5, 50)
                
                adg_products.append({
                    "Item Number": item_number,
                    "Product Name": product_name,
                    "Quality": quality,
                    "Size": size,
                    "Color": color,
                    "Quantity": quantity,
                    "Price": price,
                    "Image Path": image_path
                })

# Combine all products
all_products = godspeed_products + adg_products

# Create DataFrame
df = pd.DataFrame(all_products)

# Save to Excel
excel_path = '/home/ubuntu/inventory/product_inventory.xlsx'
df.to_excel(excel_path, index=False)

# Also save as CSV for easier processing
csv_path = '/home/ubuntu/inventory/product_inventory.csv'
df.to_csv(csv_path, index=False)

print(f"Inventory created with {len(all_products)} entries")
print(f"Excel file saved to: {excel_path}")
print(f"CSV file saved to: {csv_path}")

# Create a summary
godspeed_count = len(godspeed_products)
adg_count = len(adg_products)
total_items = len(all_products)
unique_products = len(set(df["Item Number"]))

summary = f"""
Inventory Summary:
-----------------
Total inventory entries: {total_items}
Unique product items: {unique_products}
Godspeed product variants: {godspeed_count}
ADG product variants: {adg_count}
Quality options: {', '.join(quality_options)}
Size options: {', '.join(size_options)}
Godspeed colors: {', '.join(godspeed_colors)}
ADG colors: {', '.join(adg_colors)}
Price range: ${min(df['Price'])} - ${max(df['Price'])}
"""

with open('/home/ubuntu/inventory/inventory_summary.txt', 'w') as f:
    f.write(summary)

print("Summary file created at: /home/ubuntu/inventory/inventory_summary.txt")
