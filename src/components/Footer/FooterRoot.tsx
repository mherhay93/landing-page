import FooterBanner from "./FooterBanner/FooterBanner";
import Footer from "./Footer/Footer";
import FooterAddress from "./FooterAddress/FooterAddress";
import cn from './footer.module.css'

const FooterRoot = () => {
    return (
        <footer className={cn.container}>
            <FooterBanner/>
            <Footer/>
            <FooterAddress/>
        </footer>
    )
}

export default FooterRoot;
