
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import Products from "../components/Products"
import About from "../components/About"

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <About />
            <Products />
        </div>
    )
}

export default Home
