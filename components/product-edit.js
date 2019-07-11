import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { Button, Label, ErrorSpan, Row, ImgEditItem, ImgAddItem, ProductImg  } from '../styled-css/product'

const EditProductForm = ({ product, updateProduct, onClose }) => {
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
            render={({ values, errors, status, touched, isSubmitting }) => (
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
                        <Label>Images</Label>
                        <FieldArray name="images" render={arrayHelpers => (
                            <div>
                                {
                                    values.images.map((image, i) => (
                                        <ImgEditItem key={i}>
                                            <ProductImg src={image.url} />
                                            <Field type="text" name={`images[${i}].url`} />
                                            <Field type="text" name={`images[${i}].name`} />
                                            <Button type="button" onClick={() => arrayHelpers.remove(i)}>Delete</Button>
                                        </ImgEditItem>
                                    ))
                                }
                                <ImgAddItem>
                                    <Label>Add image</Label>
                                    {/* might use dropzone later */}
                                    <input id="file" name="file" type="file" onChange={(e) => {
                                        const url = e.currentTarget.files[0].name //FIX: some url to define
                                        const name = e.currentTarget.files[0].name
                                        arrayHelpers.push({url, name})
                                    }} />
                                </ImgAddItem>
                            </div>
                            )}
                        />
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
