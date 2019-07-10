import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Label = styled.label`
    margin-right: 5px;
    width: 100px;
`
const Row = styled.div`
    display: block;
    margin: 5px 0;
`

const EditProductForm = ({product, updateProduct, onClose}) => {
return (
    <div>
        <h1>Edit product: {product.id}</h1>
        <Formik
            initialValues={product}
            validate={values => {
                let errors = {}
                if (!values.name) {
                    errors.name = 'Required'
                } 
                if (!values.number) {
                    errors.number = 'Required'
                }
                return errors
            }}
            onSubmit={(values) => {
                updateProduct(product.id, values)
                onClose()
            }}
            render={({ errors, status, touched, isSubmitting }) => (
                <Form>
                <Row>
                    <Label>Name</Label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" className="error" />
                </Row>
                <Row>
                    <Label>Number</Label>
                    <Field type="text" name="number" />
                    <ErrorMessage name="number" component="div" className="error" />
                </Row>
                <Row>
                    <Label>Description</Label>
                    <Field type="input" name="description" component="textarea" />
                </Row>
                <Row>
                    <button type="submit" disabled={isSubmitting}>
                    Submit
                    </button>
                    <button type="button" onClick={onClose}>
                    Cancel
                    </button>
                </Row>
                </Form>
            )}
        />
    </div>
)}

export default EditProductForm
