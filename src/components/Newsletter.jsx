
import styled from "styled-components"

import { HiMail } from 'react-icons/hi'

const Container = styled.div`
    width: 80%;
    margin: 30px auto;
    height: 60vh;
    border: 2px solid rgba(173, 216, 230, 0.5);
    box-shadow: 1px 1px 6px rgba(173, 216, 230, 0.8);
    background-color: rgba(173, 216, 230, 0.3);
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
    font-size: 24px;
    font-weight: 600;
    width: 50%;
    @media(max-width: 768px) {
        width: 90%;
    }
`
const InputContainer = styled.div`
    display: flex;
    width: 50%;
    background-color: transparent;
    margin: 30px 0px;
    @media(max-width: 768px) {
        width: 90%;
    }
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding: 10px 20px;
`
const Icon = styled.div`
    flex: 1;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid gray;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>SIGN UP TO OUR MAILER TO RECIEVE EXCLUSIVE OFFERS</Title>
            <InputContainer>
                <Input placeholder='EMAIL' />
                <Icon>
                <HiMail size='26px' />
                </Icon>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
