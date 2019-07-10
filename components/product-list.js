import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '../routes'

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
const ProductList = ({ data }) => {
    if (!data) return (<div/>)
    return (
        data.map((product, i) => {
            return (
                <ProductItem key={i} item={product}></ProductItem>
            )
        })
    )
};

export default ProductList
