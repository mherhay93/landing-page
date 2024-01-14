import {useContext} from "react";
import {aboutUs} from "../../__Fake_Data__/data";
import {formatReplace, scrollToElement} from "../../utiles/utiles";
import Context from "../../context/Context";
import PhoneIcon from "../Helpers/Phone";
import Button from "../Helpers/Button";
import cn from './navbar.module.css'

const NavButtons = () => {
    const formattedPhoneNumber = formatReplace({phone: aboutUs.phone});
    const context = useContext(Context)
    
    return (
        <div className={cn.nav_buttons}>
            <div className={cn.nav_buttons_call}>
                <div className={cn.nav_buttons_phone}>
                    <PhoneIcon/>
                    <span className={cn.phone}>{formattedPhoneNumber}</span>
                </div>
                <a href={`tel:${aboutUs.phone}`} className={cn.call_me}>Call me</a>
            </div>
            <Button onClick={() => scrollToElement(context)} name={'ORDER'}/>
        </div>
    )
}

export default NavButtons;
