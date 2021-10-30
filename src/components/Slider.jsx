
import { useState } from 'react'
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi'

import styled from "styled-components"

import { sliderItems } from './SliderData'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
    z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-out;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  line-break: break-all;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <BiLeftArrowCircle size='45px' />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map(item=> (
                    <Slide bg={item.bg}>
                        <ImageContainer>
                            <Image width='100%' height='80%' src={item.image} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Shop now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <BiRightArrowCircle size='45px' />
            </Arrow>
        </Container>
    )
}

export default Slider
