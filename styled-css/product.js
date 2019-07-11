import styled from 'styled-components'

export const Label = styled.label`
    margin-right: 5px;
    width: 100px;
`
export const Row = styled.div`
    display: flex;
    margin: 5px 0;
`
export const ErrorSpan = styled.span`
    margin-left: 5px;
    color: red;
`
export const Button = styled.button`
    margin-right: 5px;
`
export const ProductListItem = styled.li`
    list-style: none;
    margin: 5px 0;
`
export const ProductImg = styled.img`
    padding-right: 5px
`
export const ProductLink = styled.a`
    text-decoration: none;
        color: blue;
        font-family: 'Arial';
    } 
    &:hover {
        opacity: 0.6;
    }
`
export const ImgEditItem = styled.div`
    vertical-align: baseline;
    margin-bottom: 5px;
`
export const ImgAddItem = styled.div`
    border: 1px dashed;
    padding: 5px;
`