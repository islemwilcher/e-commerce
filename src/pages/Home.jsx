
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import Products from "../components/Products"
import About from "../components/About"
import Newsletter from "../components/Newsletter"

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <About />
            <Products />
            <Newsletter />
        </div>
    )
}

export default Home
