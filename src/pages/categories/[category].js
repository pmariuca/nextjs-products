import {API_CATEGORIES, API_ROUTE_CATEGORY, API_ROUTES} from "@/utils/constants";
import ProductPage from "@/components/ProductPage";

const Category = (props) => {
	return (
		<>
		<div>
			<ProductPage products={props}/>
		</div>
		</>
	);
}

export async function getStaticPaths() {
	const paths = API_CATEGORIES?.map(category =>  ({
		params: {
			category : category
		}
	}));
	return {
		paths,
		fallback: false
	}

}

export async function getStaticProps(context) {
	const { params} = context;
	const { category } = params;
	const res = await fetch(API_ROUTE_CATEGORY+category);
	const products = await res.json();
	return {
		props: {
			products
		}
	}
}

export default Category;