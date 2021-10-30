
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

import styled from "styled-components"

import HomePic from '../assests/homepic.jpg'
import Watch from '../assests/slideOne.jpg'
import Accessory from '../assests/slideTwo.jpg'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

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
  display: flex;
`; 

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  line-break: break-all;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

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
                    </ImageContainer>
                    <InfoContainer>
                        <Title>LAPTOP, XBOX, DEVICES..</Title>
                        <Desc>WANT TO UPGRADE YOUR DEVICES! GET 20% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>Shop now</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImageContainer>
                        <Image width='100%' height='80%' src={Watch} />
                        
                    </ImageContainer>
                    <InfoContainer>
                        <Title>WATCHES..</Title>
                        <Desc>SMART OR CLASSIC! YOU COULD FIND THEM ALL.</Desc>
                        <Button>Shop now</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImageContainer>
                        <Image width='100%' height='80%' src={Accessory} />
                        
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Accessory</Title>
                        <Desc>Accessory TO MAKE UR DEVICES LOOKS PERFECT AND PROTECTED.</Desc>
                        <Button>Shop now</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <BiRightArrowCircle size='45px' />
            </Arrow>
        </Container>
    )
}

export default Slider
