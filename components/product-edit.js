import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Label, ErrorSpan,Row } from '../styled-css/product'

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
                        <ErrorMessage name="name" component={ErrorSpan} />
                    </Row>
                    <Row>
                        <Label>Number</Label>
                        <Field type="text" name="number" />
                        <ErrorMessage name="number" component={ErrorSpan} />
                    </Row>
                    <Row>
                        <Label>Description</Label>
                        <Field type="text" name="description" component="textarea" />
                    </Row>
                    <Row>
                        <Button type="submit" disabled={isSubmitting}>Submit</Button>
                        <Button type="button" onClick={onClose}>Cancel</Button>
                    </Row>
                </Form>
            )}
        />
    </div>
)}

export default EditProductForm
