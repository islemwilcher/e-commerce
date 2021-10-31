
import styled from 'styled-components'

import CategoriesItem from './CategoriesItem'

import { CategoriesData } from './CategoriesData'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
    return (
        <Container>
            {CategoriesData.map(item => (
                <CategoriesItem item={item} />
            ))}
        </Container>
    )
}

export default Categories
