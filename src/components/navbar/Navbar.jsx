
import styled from 'styled-components'

import { FiSearch } from 'react-icons/fi'
import { IoMdCart } from 'react-icons/io'

import Badge from '@material-ui/core/badge'

const Container = styled.div`
    height: 60px;
    background-color: whitesmoke;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

// left side
const Left = styled.div`
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
                    <MenuItem>REGESTER</MenuItem>
                    <MenuItem>sign in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={0} color='primary'>
                        <IoMdCart size='25px' />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
