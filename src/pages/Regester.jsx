
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"

const Container = styled.div`
    height: 83vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    @media(max-width: 768px) {
        height: 75vh;
    }
`
const Wrapper = styled.div`
    width: 50%;
    height: auto;
    padding: 10px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid lightgray;
    box-shadow: 2px 2px 6px gray;
    @media(max-width: 768px) {
        width: 98%;
    }
`
const Title = styled.h3`
    font-size: 24px;
    font-weight: 800;
`
const Input = styled.input`
    border: none;
    width: 100%;
    padding: 8px 20px;
    margin-top: 10px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    margin-top: 20px;
    background-color: blue;
    border: 1px solid gray;
    color: white;
    font-weight: 500;
    cursor: pointer;
`

const Regester = () => {
    return (
        <>
        <Announcement />
        <Navbar />
        <Container>
            <Wrapper>
                <Title>REGESTER</Title>

                <Input placeholder='FIRST NAME' />
                <Input placeholder='LAST NAME' />
                <Input placeholder='USER NAME' />
                <Input placeholder='EMAIL' />
                <Input placeholder='PASSWORD' />
                <Input placeholder='CONFIRM PASSWORD' />
                
                <Button>Submit</Button>
            </Wrapper>
        </Container>
        </>
    )
}

export default Regester
