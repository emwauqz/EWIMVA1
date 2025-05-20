import React, { useState, useEffect } from 'react';
import { ProductSection } from '../../components/ProductSection';
import { Input } from '../../components/ui/input';
import api from '../../lib/api';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  colorVariants: { color: string; image: string }[];
}

export default function EwimvaSeorch(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Input
              type="text"
              placeholder="ИСКАТЬ"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[500px] border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
          </div>
          {loading && <div className="text-center py-8">Loading...</div>}
          {error && <div className="text-center py-8 text-red-500">{error}</div>}
          {searchQuery && !loading && !error && (
            filteredProducts.length > 0 ? (
              <ProductSection products={filteredProducts} />
            ) : (
              <div className="text-center py-8">
                <p className="font-['Montserrat'] text-[18px] text-[#131313]">
                  No products found.
                </p>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}