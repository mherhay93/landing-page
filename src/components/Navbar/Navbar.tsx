import logo from '../../assets/images/logo.png'
import LayoutSection from "../LayoutSection";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import cn from './navbar.module.css'

const Navbar = () => {
    return (
        <LayoutSection>
            <nav className={cn.container}>
                <a href='/'>
                    <img className={cn.logo} src={logo} alt='logo'/>
                </a>
                <div className={cn.links_block}>
                    <NavLinks/>
                    <NavButtons/>
                </div>
            </nav>
        </LayoutSection>
    )
}

export default Navbar;
