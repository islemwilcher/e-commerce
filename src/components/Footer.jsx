
import styled from "styled-components"
import { FaFacebookF, FaPinterestP, FaMapMarkerAlt } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsTelephoneOutboundFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

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
    padding: 20px;
    border-right: 1px solid gray;
`
const Links = styled.div`
    display: flex;
`
const UL = styled.div`
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const LI = styled.li`
    padding: 0;
    margin: 5px 30px;
    list-style: none;
    display: flex;
    align-items: center;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
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
            <Center>
                <Title>USEFUL LINKS</Title>
                <Links>
                <UL>
                    <LI>Home</LI>
                    <LI>Newest</LI>
                    <LI>Popular</LI>
                </UL>
                <UL>
                    <LI>Phone</LI>
                    <LI>Ipad</LI>
                    <LI>Xbos</LI>
                    </UL>
                <UL>
                    <LI>Accessory</LI>
                    <LI>Watch</LI>
                    <LI>Products</LI>
                </UL>
                </Links>
            </Center>
            <Right>
            <Title>USEFUL LINKS</Title>
            <UL>
                    <LI><BsTelephoneOutboundFill size='16' style={{ marginRight: '10px'}} />+123 456 789</LI>
                    <LI><HiMail size='16' style={{ marginRight: '10px'}} />contact@gmail.com</LI>
                    <LI><FaMapMarkerAlt size='16' style={{ marginRight: '10px'}} />downtown street 35 on the corner</LI>
                </UL>
            </Right>
        </Container>
    )
}

export default Footer
