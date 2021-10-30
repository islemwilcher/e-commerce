
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

import styled from "styled-components"

import HomePic from '../assests/homepic.jpg'
import Ipad from '../assests/ipad.jpg'
import AppleWatch from '../assests/appleWatch.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    width: 30px;
    height: 30px;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px' };
    right: ${props => props.direction === 'right' && '10px' };
    margin: auto;
    cursor: pointer;
`

const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
const ImageContainer = styled.div`
    position: relativ;
`
const Image = styled.img`
    width: 100% !important;
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    
`
const InfoContainer = styled.div`
    position: absolute;
    top:0;
    left: 30px;
`
const Title = styled.h3`
    margin-top: 30px;
    font-size: 70px;
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    backgrouns-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <BiLeftArrowCircle size='45px' />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                        <Image width='100%' height='80%' src={HomePic} />
                        <InfoContainer>
                            <Title>DEVICES,WATCHES..</Title>
                            <Desc>WANT TO UPGRADE YOUR DEVICES! GET 20% OFF FOR NEW ARRIVALS.</Desc>
                            <Button>Shop now</Button>
                        </InfoContainer>
                    </ImageContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <BiRightArrowCircle size='45px' />
            </Arrow>
        </Container>
    )
}

export default Slider
