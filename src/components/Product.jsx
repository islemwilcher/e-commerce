
import styled from 'styled-components'

import { FiSearch } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    transition: all 0.5s ease;
`
const Circul = styled.div`
    opacity: 0;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    margin: auto;
    z-index: 3;
`
const Container = styled.div`
    cursor: pointer;
    flex: 1;
    margin: 0px 10px;
    box-shadow: 1px 1px 2px gray;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover ${Info}, &:hover ${Circul}{
        opacity: 1;
    }
`
const Image = styled.img`
    width: 100%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    z-index: 3;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightblue;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
    return (
        <Container>
            <Circul />
            <Image src={item.image} />
            <Info>
                <Icon><AiOutlineHeart /></Icon>
                <Icon><FiSearch /></Icon>
                <Icon><IoMdCart /></Icon>
            </Info>
        </Container>
    )
}

export default Product
