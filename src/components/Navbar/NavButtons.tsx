import {aboutUs} from "../../__Fake_Data__/data";
import {formatReplace} from "../../utiles/utiles";
import PhoneIcon from "../Helpers/Phone";
import Button from "../Helpers/Button";
import cn from './navbar.module.css'

const NavButtons = () => {
    const formattedPhoneNumber = formatReplace({phone: aboutUs.phone});
    return (
        <div className={cn.nav_buttons}>
            <div className={cn.nav_buttons_call}>
                <div className={cn.nav_buttons_phone}>
                    <PhoneIcon/>
                    <span className={cn.phone}>{formattedPhoneNumber}</span>
                </div>
                <a href={`tel:${aboutUs.phone}`} className={cn.call_me}>Call me</a>
            </div>
            <Button name={'ORDER'}/>
        </div>
    )
}

export default NavButtons;
