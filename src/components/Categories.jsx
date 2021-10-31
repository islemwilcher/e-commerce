
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import CategoriesItem from './CategoriesItem'

import { CategoriesData } from './CategoriesData'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .grid{
        margin-top: 30px;
    }
`
const Title = styled.h1`
    margin: 40px auto 0 30px;
    font-weight: 500;

`

const Categories = () => {
    return (
        <>
        <Title>CATEGORIES</Title>
        <Container container alignItems="stretch">
            {CategoriesData.map((item) => (
                <Grid className='grid' item xs={12} sm={6} md={3}>
                <CategoriesItem item={item} key={item.id} />
                </Grid>
            ))}
        </Container>
        </>
    )
}

export default Categories
