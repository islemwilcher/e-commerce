
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: rgba(173, 216, 230, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 600;
`

const About = () => {
    return (
        <Container>
            <Title>About</Title>
        </Container>
    )
}

export default About
