
import styled from 'styled-components'

import { popularProducts } from './CategoriesData'
import Product from './Product'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 30px;
`
const Title = styled.h1`
    margin: 40px auto 30px 30px;
    font-weight: 500;
`
const Products = () => {
    return (
        <>
        <Title>POPULAR</Title>
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        </>
    )
}

export default Products
