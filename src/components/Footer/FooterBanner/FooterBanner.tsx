import cn from '../footer.module.css'
import LayoutSection from "../../LayoutSection";
import {footerPromotionData} from "../../../__Fake_Data__/data";
import Button from "../../Helpers/Button";

const FooterBanner = () => {
    const { timePeriod , price} = footerPromotionData
    return (
        <LayoutSection customClass={cn.layout}>
            <div className={cn.footer_card}>
                <span className={cn.footer_card_title}>Still thinking?</span>
                <span className={cn.footer_card_text}>Try {timePeriod} of nutrition</span>
                <span className={`${cn.footer_card_text} ${cn.footer_card_price}`}>for {price} AMD</span>
                <Button name='TRY NOW' customClass={cn.footer_card_btn} customClassBtnName={cn.footer_card_btn_name}/>
            </div>
        </LayoutSection>
    )
}

export default FooterBanner;
