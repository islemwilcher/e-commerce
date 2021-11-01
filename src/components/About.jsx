
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: rgba(173, 216, 230, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px) {
        height: 40vh;
    }
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 600;
    
`
const Desc = styled.p`
    width: 50%;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
    @media(max-width: 768px) {
        width: 90%;
        margin: 20px 0px;
    }
`

const About = () => {
    return (
        <Container>
            <Title>About</Title>
            <Desc>THERE ARE MANY OF THE ONLINE STORES, OURE IS ONE OF THE MOST POWERFUL, WE PROVIDE OUR COSTUMERS A LOT OF PREVILEGES, DISCOUNT, FREE SHIPPING AND A LOT OF THE NEWST PRODUCTS </Desc>
        </Container>
    )
}

export default About
