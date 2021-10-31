
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 10px;
    padding: 10px;
    box-shadow: 1px 1px 2px gray;
`
const Image = styled.img`
    width: 100%
`
const Info = styled.div`
`
const Title = styled.h2`
    margin: 5px 0px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid gray;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
    cursor: pointer;
`

const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem
