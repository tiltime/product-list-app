import React, { Component } from 'react'
import { ProductListItem, ProductLink } from '../styled-css/product'
import { Link } from '../routes'

const ProductItem = ({ item }) => {
    if (!item) return (<div/>)
    return (
        <ProductListItem key={item.id}>
            <Link route='product' params={{id: item.id}}>
                <ProductLink>{item.name} - {item.number}</ProductLink>
            </Link>
        </ProductListItem>
    )
};
const ProductList = ({ products }) => {
    if (!products) return (<div/>)
    return (
        products.map((product, i) => {
            return (
                <ProductItem key={i} item={product}></ProductItem>
            )
        })
    )
};

export default ProductList
