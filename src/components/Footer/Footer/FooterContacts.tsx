import {aboutUs} from "../../../__Fake_Data__/data";
import {formatReplace} from "../../../utiles/utiles";
import cn from '../footer.module.css'

const FooterContacts = () => {
    const { phone, mail} = aboutUs
    
    const formattedPhoneNumber = formatReplace({phone: phone});
    return (
        <div className={cn.contacts}>
            <span>{formattedPhoneNumber}</span>
            <span>from 9:00 to 21:00</span>
            <span>{mail}</span>
        </div>
    )
}

export default FooterContacts;
