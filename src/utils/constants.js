export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_CATEGORIES = [
	'Tricou', 'Hanorac', 'Bluza', 'Blugi', 'Pantaloni', 'Camasa'
];

export const API_PRODUCTS_LIST= API_URL+"/api/products?populate=*";

export const API_ROUTE_CATEGORY = API_URL+"/api/products?populate=*&filters[category][$eq]%3D=";

export const API_ROUTE_IDS = API_URL+"/api/products/";

export const COMPONENTS_TYPES={
	IMAGE: "dynamiczone.image-content",
	PRODUCT: "dynamiczone.product-content",
}

export const ALIGNMENT={
	LEFT: 'Image Left',
	RIGHT: 'Image Right',
	CENTER: 'Image Center',
}