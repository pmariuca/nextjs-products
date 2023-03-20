import Head from 'next/head'
import React from "react";
import {API_ROUTES} from "@/utils/constants";
import ProductListingPage from "@/components/ProductListingPage";

export default function Home({products}) {
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <ProductListingPage products={products}/>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(API_ROUTES.PRODUCTS_LIST);
    const products = await res.json();
    return {
        props: {
            products,
        }
    }
}
