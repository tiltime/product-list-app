import styled from 'styled-components'

const ProductImg = styled.img`
    padding-right: 5px
`

const Image = ({ images }) => {
    if (!images) return (<div/>)
    return (
        images.map((image, i) => {
            return (
                <div key={i}>
                    <ProductImg src={image.url} alt={image.name}/>
                    <span>{image.name}</span>
                </div>
            )
        })
    )
}

const ProductDetail = ({ product }) => {
    if (!product) return (<div/>)
    return (
        <div>
            <h1>{product.name}</h1>
            <span>{product.number}</span>
            <p>{product.description}</p>
            <div>
                <Image images={product.images}></Image>
            </div>
        </div>
    )
}

export default ProductDetail
