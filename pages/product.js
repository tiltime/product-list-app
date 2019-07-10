import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import Layout from '../components/layout.js'
import { fetchProduct, updateProduct } from '../action'
import ProductDetail from '../components/product-detail.js'
import EditProductForm from '../components/edit'

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

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const product = this.props.product
        return(
            <Layout>
                <ProductDetail product={product}></ProductDetail>
                <button onClick={this.openModal}>Edit</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                    contentLabel="Example Modal">
                        <EditProductForm product={product} updateProduct= {this.props.updateProduct} onClose={this.closeModal}></EditProductForm>
                </Modal>
            </Layout>
        )
    }
}

const mapDispatchToProps = { fetchProduct, updateProduct }

function mapStateToProps (state) {
  const { product } = state
  return { product }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
