
import styled from "styled-components"

import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"

const Container = styled.div``

const Wrraper = styled.div`
    padding: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none' };
    background-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white' }
`

const TopTexts = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrraper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shipping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' >CHECKOUT NOW</TopButton>
                </Top>
            </Wrraper>
        </Container>
    )
}

export default Cart
