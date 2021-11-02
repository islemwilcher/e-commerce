
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FiSearch } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'

import Badge from '@material-ui/core/badge'

const Container = styled.div`
    height: 12vh;
    background-color: whitesmoke;
    z-index: 10;
    @media(max-width: 768px) {
        height: 20vh;
    }
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        height: 20vh !important;
    }
`

// left side
const Left = styled.div`
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 768px) {
        width: 100%;
    }
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 3px 5px;
    align-items:center;
`
const Input = styled.input`
    border: none;
    width: 90%;
    padding: 5px;
`

//center side
const Center = styled.div`
    padding: 10px;
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

//right side
const Right = styled.div`
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props=>props.bg};
  cursor: pointer;
  border: none;
  color: black;
  &:hover {
      border-radius: 5px;
      box-shadow: 1px 1px 3px black;
      font-weight: 700;
  }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <FiSearch size='25px' />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>L0G0!</Logo>
                </Center>
                <Right>
                    <MenuItem><Link to='/regester'><Button bg='blue'>REGESTER</Button></Link></MenuItem>
                    <MenuItem><Link to='/signin'><Button bg='blue'>SIGN IN</Button></Link></MenuItem>
                    <MenuItem>
                    <Button bg='transparent'>
                    <Badge badgeContent={1} color='primary'>
                        <IoMdCart size='25px' />
                    </Badge>
                    </Button>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
