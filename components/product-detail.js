import styled from 'styled-components'

const ProductImg = styled.img`
    padding-right: 5px
`

const Image = ({ items }) => {
    if (!items) return (<div/>)
    return (
        Object.keys(items).map((obj, i) => {
            return (
                <ProductImg key={i} src={items[obj].url} alt={items[obj].name}/>
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
                <Image items={product.images}></Image>
            </div>
        </div>
    )
}

export default ProductDetail
