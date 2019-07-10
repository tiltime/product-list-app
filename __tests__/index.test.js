import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import ProductList from '../components/product-list.js'
import ProductDetail from "../components/product-detail";

const mockProducts = [
    { 
        "id": 2,    
        "name": "b00021xhzw", 
        "number": "adobe after effects professional 6.5 upgrade from standard to professional", 
        "description": "upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets", 
        "images": []  
    },
    { 
        "id": 3,    
        "name": "b00021xhzw", 
        "number": "domino designer/developer v5.0", 
        "description": "reference domino designer/developer r5 doc pack includes the following titles: application development with domino designer (intermediate-advanced) 536 pages it explains building applications creating databases using forms fields views folders navi", 
        "images": [
            { 
            "url": "http://lorempixel.com/200/200/people/", 
            "name": "cover"
            }]
    }
]

describe('With Snapshot Testing', () => {
    it('Render ProductItem', () => {
        const component = renderer.create(<ProductList products={mockProducts} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Render ProductDetail', () => {
        let product  = mockProducts[1]
        const component = renderer.create(<ProductDetail product={product}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
