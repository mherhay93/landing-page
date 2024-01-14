import {FC, useContext} from "react";
import close from '../../../assets/icons/icons8-close-button-32.png'
import logo from '../../../assets/images/logo.png'
import cn from './mobileNavbar.module.css'
import Button from "../../Helpers/Button";
import {scrollToElement} from "../../../utiles/utiles";
import {navLinks} from "../utils";
import Context from "../../../context/Context";

interface IProps {
    onClose: (v:boolean) => void
}

const MobileNavbar:FC<IProps> = ({onClose}) => {
    const context = useContext(Context)
    const handleClick = () => {
        scrollToElement(context)
        onClose(false)
    }
    return (
        <div className={cn.container}>
            <img onClick={() => onClose(false)} className={cn.close} alt={'close'} src={close}/>
            <img onClick={() => onClose(false)} className={cn.logo} alt={'close'} src={logo}/>
            <div className={cn.mobile_links_block}>
                <div className={cn.nav_links}>
                    {navLinks.map(item => (
                        <a className={cn.link} href={item.href} key={item.id}>{item.name}</a>
                    ))}
                </div>
                <Button onClick={handleClick} name={'ORDER'}/>
            </div>
        </div>
    )
}

export default MobileNavbar;
