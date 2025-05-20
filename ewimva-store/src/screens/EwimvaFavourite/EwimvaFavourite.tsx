import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { HeartIcon } from "lucide-react";
import api from '../../lib/api';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  colorVariants: { color: string; image: string }[];
}

export default function EwimvaFavourite(): JSX.Element {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Please log in to view favorites');
        }

        // Fetch user's favorites
        const userResponse = await api.get('/auth/profile');
        setFavorites(userResponse.data.favorites || []);

        // Fetch all products
        const productsResponse = await api.get('/products');
        const products = productsResponse.data;

        // Filter products that are in favorites
        const favProducts = products.filter((product: Product) =>
          userResponse.data.favorites.includes(product.id)
        );
        setFavoriteProducts(favProducts);
      } catch (err: any) {
        setError(err.message || 'Failed to load favorites');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleAddToCart = async (product: Product) => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existingItem = cartItems.find((item: any) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1, colorVariants: product.colorVariants || [] });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      // Optionally sync with backend cart (if implemented)
      await api.post('/user/cart', { productId: product.id, quantity: 1 });
      alert(`${product.name} добавлен в корзину!`);
    } catch (err) {
      alert('Failed to add to cart');
    }
  };

  const handleFavoriteToggle = async (productId: string) => {
    try {
      const isFavorite = favorites.includes(productId);
      if (isFavorite) {
        // Remove from favorites
        await api.delete('/user/favorites', { data: { productId } });
        setFavorites(favorites.filter((id) => id !== productId));
        setFavoriteProducts(favoriteProducts.filter((product) => product.id !== productId));
      } else {
        // Add to favorites
        await api.post('/user/favorites', { productId });
        setFavorites([...favorites, productId]);
        const productResponse = await api.get(`/products/${productId}`);
        setFavoriteProducts([...favoriteProducts, productResponse.data]);
      }
    } catch (err) {
      alert('Failed to update favorites');
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mt-10">
        <div className="max-w-[1920px] mx-auto px-8 py-8">
          <h1 className="font-medium text-[24px] text-[#131313] leading-[28px] mb-6">
            Мои фавориты
          </h1>
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {favoriteProducts.map((product) => (
                <Card key={product.id} className="w-full max-w-[479px] h-[800px] relative border-none">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div
                      className="w-full h-[671px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="p-2 flex flex-col flex-grow space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-normal text-[11.7px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
                          {product.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="p-0 h-auto w-auto"
                          onClick={() => handleFavoriteToggle(product.id)}
                        >
                          <HeartIcon
                            className={`w-4 h-[15px] ${favorites.includes(product.id) ? 'text-black' : 'text-white'}`}
                            fill={favorites.includes(product.id) ? '#000000' : 'none'}
                          />
                        </Button>
                      </div>
                      <p className="text-[12.6px] font-normal text-[#131313] font-['Inter',Helvetica] leading-[18px]">
                        {product.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {product.colorVariants.map((color, index) => (
                          <div
                            key={index}
                            className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${color.image})` }}
                          />
                        ))}
                      </div>
                      <Button
                        className="w-full h-11 bg-white text-[#131313] border border-[#131313] rounded-none hover:bg-gray-100 mt-auto"
                        onClick={() => handleAddToCart(product)}
                      >
                        <span className="font-bold text-[12.8px]">
                          ДОБАВИТЬ
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
              <p className="font-['Montserrat'] text-[18px] text-[#131313]">
                No items in favorites yet.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}