import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

const ProductImg = styled.img`
    padding-right: 5px
`

const Image = ({items}) => {
    if (!items) return (<div/>)
    return (
        Object.keys(items).map((obj, i) => {
            return (
                <ProductImg key={i} src={items[obj].url} alt={items[obj].name}/>
            )
        })
    )
}

const ProductDetail = ({product}) => {
    if (!product) return (<div/>)
    return (
        <div>
            <h1>{product.id}</h1>
            <h3>{product.name}</h3>
            <span>{product.number}</span>
            <p>{product.description}</p>
            <div>
                <Image items={product.images}></Image>
            </div>
            <Link as={`/product/${product.id}/edit`} href={`/product?id=${product.id}/edit`}>
                <button>Edit</button>
            </Link>
        </div>
    )
}

const mapDispatchToProps = {}

function mapStateToProps (state) {

}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(withRouter(ProductDetail))
