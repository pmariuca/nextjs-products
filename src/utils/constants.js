export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_CATEGORIES = [
	'Tricou', 'Hanorac', 'Bluza', 'Blugi', 'Pantaloni', 'Camasa'
];

export const API_ROUTES = {
	PRODUCTS_LIST: API_URL+"/api/products?populate=*",
	TSHIRT_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Tricou",
	HOODIE_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Hanorac",
	BLOUSE_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Bluza",
	JEANS_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Blugi",
	TROUSERS_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Pantaloni",
	SHIRT_LIST: API_URL+"/api/products?populate=*&filters[category][$eq]%3D=Camasa",
	HOMEPAGE: API_URL+"/api/homepage?populate=deep",
};

export const API_ROUTE_CATEGORY = API_URL+"/api/products?populate=*&filters[category][$eq]%3D=";

export const COMPONENTS_TYPES={
	IMAGE: "dynamiczone.image-content",
	PRODUCT: "dynamiczone.product-content",
}

export const ALIGNMENT={
	LEFT: 'Image Left',
	RIGHT: 'Image Right',
	CENTER: 'Image Center',
}