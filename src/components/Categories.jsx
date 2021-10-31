
import styled from 'styled-components'

import CategoriesItem from './CategoriesItem'

import { CategoriesData } from './CategoriesData'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
const Title = styled.h1`
    margin: 40px auto 30px 30px;
    font-weight: 500;

`

const Categories = () => {
    return (
        <>
        <Title>CATEGORIES</Title>
        <Container>
            
            {CategoriesData.map(item => (
                <CategoriesItem item={item} key={item.id} />
            ))}
        </Container>
        </>
    )
}

export default Categories
