import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import ProductList from '../components/product-list'
import { fetchProducts } from '../actions';

class Index extends Component {
    componentDidMount () {
        this.props.fetchProducts()
    }
  
    render () {
        const products  = this.props.products
        return (
            <Layout>
                <ProductList products={products}></ProductList>
            </Layout>
        )
    }
}

const mapDispatchToProps = { fetchProducts }

function mapStateToProps (state) {
    const { products } = state
    return { products }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
