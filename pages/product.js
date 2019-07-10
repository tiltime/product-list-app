import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Layout from '../components/layout.js'
import { fetchProduct, updateProduct, openModal, closeModal } from '../action'
import ProductDetail from '../components/product-detail.js'
import EditProductForm from '../components/product-edit'
import { Button } from '../styled-css/product'

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

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
                <Button onClick={this.props.openModal}>Edit</Button>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.closeModal}
                    style={modalStyles}
                    contentLabel="Edit Product Modal">
                        <EditProductForm product={product} updateProduct={this.props.updateProduct} onClose={this.props.closeModal}></EditProductForm>
                </Modal>
            </Layout>
        )
    }
}

const mapDispatchToProps = { fetchProduct, updateProduct, openModal, closeModal  }

function mapStateToProps (state) {
  const { product, modalIsOpen } = state
  return { product, modalIsOpen }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
