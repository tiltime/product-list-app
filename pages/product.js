import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import Layout from '../components/layout.js'
import { fetchProduct } from '../action'
import ProductDetail from '../components/product-detail.js'

class Product extends React.Component {
    static async getInitialProps ({ reduxStore, query }) {
        reduxStore.dispatch(fetchProduct(query.id)) 
        return {}
    }

    render() {
        const product = this.props.product
        return(
            <Layout>
                <ProductDetail product={product}></ProductDetail>
            </Layout>
        )
    }
}

const mapDispatchToProps = { fetchProduct }

function mapStateToProps (state) {
  const { product } = state
  return { product }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
