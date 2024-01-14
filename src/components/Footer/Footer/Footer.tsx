import LayoutSection from "../../LayoutSection";
import FooterIcons from "./FooterIcons";
import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import cn from '../footer.module.css'

const Footer = () => {
    return (
        <LayoutSection>
            <div className={cn.footer}>
                <FooterIcons/>
                <FooterContacts/>
                <FooterLinks/>
                <FooterSocial/>
            </div>
        </LayoutSection>
    )
}

export default Footer;
