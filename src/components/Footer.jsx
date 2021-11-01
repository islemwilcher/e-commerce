
import styled from "styled-components"
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    padding: 20px;
    border-right: 1px solid gray;
`
const Title = styled.h3`
    font-size: 30px
`
const Desc = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0px;
`
const MediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Media = styled.div`
    margin: 0px 10px;
    color: white;
    background-color: #${props=>props.bg};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>L0G0!</Title>
                <Desc>our online shope isnt only on the web!. you could reach us on social media and meet our community</Desc>
                <MediaContainer>
                    <Media bg='0845a6'>
                        <FaFacebookF size='24px' />
                    </Media>
                    <Media bg='e61298'>
                        <BsInstagram size='24px' />
                    </Media>
                    <Media bg='4d8ef7'>
                        <BsTwitter size='24px' />
                    </Media>
                    <Media bg='e62712'>
                        <FaPinterestP size='24px' />
                    </Media>
                </MediaContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
