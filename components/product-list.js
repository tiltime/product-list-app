import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ProductListItem = styled.li`
    list-style: none;
    margin: 5px 0;
`

const ProductLink = styled.a`
     text-decoration: none;
        color: blue;
        font-family: 'Arial';
    } 
    &:hover {
        opacity: 0.6;
    }
`

const ProductItem = ({item}) => {
    if (!item) return (<div/>)
    return (
        <ProductListItem key={item.id}>
            <Link as={`/product/${item.id}`} href={`/product?id=${item.id}`}>
                <ProductLink>{item.name} - {item.number}</ProductLink>
            </Link>
        </ProductListItem>
    )
};
const ProductList = ({data}) => {
    if (!data) return (<div/>)
    return (
        Object.keys(data).map((obj, i) => {
            return (
                <ProductItem key={i} item={data[obj]}></ProductItem>
            )
        })
    )
};

export default ProductList
