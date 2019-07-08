import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Layout from '../components/layout.js';
import { fetchProduct } from '../store'

class Product extends React.Component {
    static async getInitialProps ({ reduxStore, query }) {
        reduxStore.dispatch(fetchProduct(query.id)) 
        console.log(query.id)
        return {}
    }

    render (){
        // console.log(this.props.product)
        return(
            
            <Layout>
                <h1>{this.props.product.id}</h1>
                <p>{this.props.product.name}</p>
                <p>This is the blog post content.</p>
            </Layout>
        )
    }
}

const mapDispatchToProps = { fetchProduct }

function mapStateToProps (state) {
  const { product } = state
  return { product }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(withRouter(Product))
