
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    width: 80%;
    margin: 30px auto;
    border: 2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
    background-color: #F2F3F4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px) {
        height: 40vh;
        width: 98%;
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
