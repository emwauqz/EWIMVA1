export interface Product {
id: string;
name: string;
category: string;
price: string;
image: string;
color: string;
colorVariants: any[];
composition: string;
origin: string;
care: string;
photosLarge: { src: string; alt: string }[];
photosSmall: { src: string; alt: string }[];
description: string;
stock?: number;
status?: 'available' | 'low' | 'unavailable';
}

export const addProduct = async (product: Omit<Product, 'id' | 'colorVariants' | 'composition' | 'origin' | 'care' | 'photosLarge' | 'photosSmall' | 'description'>): Promise<void> => {
try {
const response = await fetch('http://localhost:3001/products', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    ...product,
    colorVariants: [],
    composition: 'Не указано',
    origin: 'Не указано',
    care: 'Не указано',
    photosLarge: [],
    photosSmall: [],
    description: 'Описание отсутствует',
    color: product.color || 'Не указано',
    }),
});

if (!response.ok) {
    throw new Error('Ошибка при добавлении товара');
}
} catch (error) {
console.error('Error adding product:', error);
throw error;
}
};

export const getProducts = async (): Promise<Product[]> => {
try {
const response = await fetch('http://localhost:3001/products');
if (!response.ok) {
    throw new Error('Ошибка при получении товаров');
}
const products = await response.json();
console.log('Fetched products:', products);
return products;
} catch (error) {
console.error('Error fetching products:', error);
throw error;
}
};

export const updateProduct = async (product: Product): Promise<void> => {
try {
const response = await fetch(`http://localhost:3001/products/${product.id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
});
if (!response.ok) {
    throw new Error('Ошибка при обновлении товара');
}
} catch (error) {
console.error('Error updating product:', error);
throw error;
}
};