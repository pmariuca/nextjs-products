import Head from 'next/head'
import React from "react";
import {API_ROUTES} from "@/utils/constants";
import ProductPage from "@/components/ProductPage";

export default function Home({products}) {
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <ProductPage products={products}/>
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
