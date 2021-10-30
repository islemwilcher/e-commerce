
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

const Container = styled.div`
    height: 60px;
    background-color: whitesmoke;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

// left side
const Left = styled.div`
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 3px 5px;
    align-items:center;
`;
const Input = styled.input`
    border: none;
    width: 90%;
    padding: 5px;
`;

//center side
const Center = styled.div`
    padding: 10px;
    flex: 1;
`;

//right side
const Right = styled.div`
    padding: 10px;
    flex: 1;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <FiSearch />
                    </SearchContainer>
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
