import {useContext, useState} from "react";
import logo from '../../assets/images/logo.png'
import menu from '../../assets/icons/menu_outline_24.png'
import LayoutSection from "../LayoutSection";
import Context from "../../context/Context";
import {scrollToElement} from "../../utiles/utiles";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import cn from './navbar.module.css'
import Button from "../Helpers/Button";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar = () => {
    const context = useContext(Context)
    const [openMobile, setOpenMobile] = useState(false)
    
    const handleOpen = (v:boolean) => {
      setOpenMobile(v)
    }
    return (
        <LayoutSection customClass={cn.layout}>
            <nav className={cn.container}>
                <a href='/'>
                    <img className={cn.logo} src={logo} alt='logo'/>
                </a>
                <div className={cn.links_block}>
                    <NavLinks/>
                    <NavButtons/>
                </div>
                <div className={cn.ham_menu}>
                    <Button onClick={() => scrollToElement(context)} name={'ORDER'}/>
                    <img onClick={() => handleOpen(true)} alt={'menu'} src={menu}/>
                </div>
                {openMobile && <MobileNavbar onClose={handleOpen}/>}
            </nav>
        </LayoutSection>
    )
}

export default Navbar;
