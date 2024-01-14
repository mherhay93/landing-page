import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import OrderRoot from "../../components/Order";
import MapRoot from "../../components/Map";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import cn from './home.module.css'
import AboutUs from "../../components/AboutUs";

const Home = () => {
    return (
        <div className={cn.container}>
            <Navbar/>
            <Banner/>
            <OrderRoot/>
            <MapRoot/>
            <Testimonials/>
            <FAQ/>
            <AboutUs/>
        </div>
    )
}

export default Home;
