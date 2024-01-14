import Navbar from "../../components/Navbar";
import cn from './home.module.css'
import Banner from "../../components/Banner";
import Order from "../../components/Order";

const Home = () => {
    return (
        <div className={cn.container}>
            <Navbar/>
            <Banner/>
            <Order/>
        </div>
    )
}

export default Home;
