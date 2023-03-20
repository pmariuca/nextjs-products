import Head from "next/head";

export default function Product({product}) {
	const {
		data: {
			id,
			attributes: {
				name,
				category,
				description,
				price,
				photos
			}
		}
	} = product;

	return (
		<>
		<Head>
			<title>{name}</title>
		</Head>
		</>
	)
}