import Navbar from "../../components/Navbar";
import cn from './home.module.css'
import Banner from "../../components/Banner";
const Home = () => {
    return (
        <div className={cn.container}>
            <Navbar/>
            <Banner/>
        </div>
    )
}

export default Home;
