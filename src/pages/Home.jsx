
import styled from "styled-components"

import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import Products from "../components/Products"
import About from "../components/About"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Title = styled.h1`
    margin: 40px auto 30px 30px;
    font-weight: 500;
`

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Title>CATEGORIES</Title>
            <Categories />
            <About />
            <Title>POPULAR</Title>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
