import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import Dropzone from "react-dropzone"
import { Button, Label, ErrorSpan,Row } from '../styled-css/product'

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5,
}

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
                                        <div key={i}>
                                            <img src={image.url} />
                                            <Field type="text" name={`images[${i}].url`} />
                                            <Field type="text" name={`images[${i}].name`} />
                                        </div>
                                    ))
                                }
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
