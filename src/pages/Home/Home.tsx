import Navbar from "../../components/Navbar";
import cn from './home.module.css'
import Banner from "../../components/Banner";
import OrderRoot from "../../components/Order";
import MapRoot from "../../components/Map";
import Testimonials from "../../components/Testimonials";

const Home = () => {
    return (
        <div className={cn.container}>
            <Navbar/>
            <Banner/>
            <OrderRoot/>
            <MapRoot/>
            <Testimonials/>
        </div>
    )
}

export default Home;
