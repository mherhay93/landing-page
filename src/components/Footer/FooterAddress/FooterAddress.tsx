import cn from '../footer.module.css'
import LayoutSection from "../../LayoutSection";
import {info} from "../../../__Fake_Data__/data";

const FooterAddress = () => {
    const {name, phone1, phone2, address1, address2, street} = info
    return (
        <LayoutSection customClass={cn.address_layout}>
            <div className={cn.address}>
                <span>{name}</span>
                <span>text {phone1}</span>
                <span>text {phone2}</span>
                <span>{address1}</span>
                <span>{address2}</span>
                <span>{street}</span>
            </div>
        </LayoutSection>
    )
}

export default FooterAddress;
