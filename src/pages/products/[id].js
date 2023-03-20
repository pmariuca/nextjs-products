import {API_PRODUCTS_LIST, API_ROUTE_IDS} from "@/utils/constants";
import Product from "@/components/Product";

const ProductPage = (props) => {
	const {
		product
	} = props;

	return (
		<div>
			<Product product={product}/>
		</div>
	)
}

export async function getStaticPaths() {
	const res = await fetch(API_PRODUCTS_LIST);
	const products = await res.json();
	const paths = products?.data?.map(product => ({
		params: {
			id: product.id.toString()
		}
	}));
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context) {
	const { params } = context;
	const { id } = params;
	const res = await fetch(API_ROUTE_IDS+id+"?populate=*");
	const product = await res.json();
	return {
		props: {
			product
		}
	}
}

export default ProductPage;