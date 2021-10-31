
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { popularProducts } from './CategoriesData'
import Product from './Product'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 30px;

    .grid{
        margin-top: 30px;
    }
`
const Title = styled.h1`
    margin: 40px auto 30px 30px;
    font-weight: 500;
`
const Products = () => {
    return (
        <>
        <Title>POPULAR</Title>
        <Container container alignItems="stretch">
            {popularProducts.map((item) => (
            <Grid className='grid' key={item.id} item xs={12} sm={6} md={3}>
                <Product item={item} />
            </Grid>
            ))}
        </Container>
        </>
    )
}

export default Products
