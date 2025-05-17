export interface Product {
id: number;
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
    colorVariants: [], // Default empty array
    composition: 'Не указано', // Default value
    origin: 'Не указано', // Default value
    care: 'Не указано', // Default value
    photosLarge: [], // Default empty array
    photosSmall: [], // Default empty array
    description: 'Описание отсутствует', // Default value
    color: product.color || 'Не указано', // Ensure color is set
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
return await response.json();
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