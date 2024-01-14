import Navbar from "../../components/Navbar";
import cn from './home.module.css'
import Banner from "../../components/Banner";
import OrderRoot from "../../components/Order";
import MapRoot from "../../components/Map";

const Home = () => {
    return (
        <div className={cn.container}>
            <Navbar/>
            <Banner/>
            <OrderRoot/>
            <MapRoot/>
        </div>
    )
}

export default Home;
