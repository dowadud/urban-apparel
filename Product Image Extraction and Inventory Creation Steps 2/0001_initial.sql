-- Migration number: 0001 	 2025-04-24
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS product_variants;
DROP TABLE IF EXISTS counters;
DROP TABLE IF EXISTS access_logs;

-- Products table to store basic product information
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_path TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Product variants table to store different variations of products
CREATE TABLE IF NOT EXISTS product_variants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  quality TEXT NOT NULL,
  size TEXT NOT NULL,
  color TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  price REAL NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Analytics tables
CREATE TABLE IF NOT EXISTS counters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL,
  value INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS access_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT,
  path TEXT,
  accessed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Initial counter data
INSERT INTO counters (name, value) VALUES 
  ('page_views', 0),
  ('api_calls', 0);

-- Create indexes
CREATE INDEX idx_product_variants_product_id ON product_variants(product_id);
CREATE INDEX idx_access_logs_accessed_at ON access_logs(accessed_at);
CREATE INDEX idx_counters_name ON counters(name);
