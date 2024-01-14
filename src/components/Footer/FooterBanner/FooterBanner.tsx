import cn from '../footer.module.css'
import LayoutSection from "../../LayoutSection";
import {footerPromotionData} from "../../../__Fake_Data__/data";
import Button from "../../Helpers/Button";
import {useContext} from "react";
import Context from "../../../context/Context";
import {scrollToElement} from "../../../utiles/utiles";

const FooterBanner = () => {
    const { timePeriod , price} = footerPromotionData
    const context = useContext(Context)
    return (
        <LayoutSection customClass={cn.layout}>
            <div className={cn.footer_card}>
                <span className={cn.footer_card_title}>Still thinking?</span>
                <span className={cn.footer_card_text}>Try {timePeriod} of nutrition</span>
                <span className={`${cn.footer_card_text} ${cn.footer_card_price}`}>for {price} AMD</span>
                <Button
                    onClick={() => scrollToElement(context)}
                    name='TRY NOW'
                    customClass={cn.footer_card_btn}
                    customClassBtnName={cn.footer_card_btn_name}
                />
            </div>
        </LayoutSection>
    )
}

export default FooterBanner;
