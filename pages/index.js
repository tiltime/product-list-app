import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import ProductList from '../components/product-list'
import { fetchProductList } from '../store';

class Index extends Component {
    static getInitialProps ({ reduxStore, req }) {
        reduxStore.dispatch(fetchProductList()) 
        return {}
    }

    componentDidMount () {
      this.props.fetchProductList()
    }
  
  render () {
      return (
          <Layout>
            <ProductList data={this.props.dataList}></ProductList>
          </Layout>
      )
  }
}

const mapDispatchToProps = { fetchProductList }

function mapStateToProps (state) {
  const { dataList } = state
  return { dataList }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
