
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import IMG from '../assests/alarm.jpg'

const Container = styled.div``

const Wrraper = styled.div`
    padding: 50px;
    display: flex;
    @media (max-width: 768px) {
        padding: 10px;
        flex-direction: column;
    }
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
        height: 50vh;
    }
`

const InfoContainer  = styled.div`
    flex:1;
    padding: 0px 50px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer  = styled.div`
    width: 80%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`

const FilterSizeOption  = styled.option``

const AddContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid green;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrraper>
                <ImgContainer>
                    <Image src={IMG} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Alarm</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <Price>$ 45</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='gray' />
                            <FilterColor color='red' />
                            <FilterColor color='darkBlue' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>xs</FilterSizeOption>
                                <FilterSizeOption>s</FilterSizeOption>
                                <FilterSizeOption>m</FilterSizeOption>
                                <FilterSizeOption>xl</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrraper>
            <Footer />
        </Container>
    )
}

export default Product
