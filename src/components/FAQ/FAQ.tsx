import cn from './FAQ.module.css'
import LayoutSection from "../LayoutSection";
import {faqData, faqOfferData} from "../../__Fake_Data__/data";
import OfferCard from "../Helpers/OfferCard";
import Collapse from "../Helpers/Collapse";
const FAQ = () => {
    return (
        <LayoutSection title={'FAQ'}>
            <div className={cn.container}>
                <div className={cn.faq_offer}>
                    {faqOfferData.map(item => (
                        <OfferCard
                            customClassImg={cn.faq_offer_card_img}
                            customClass={cn.faq_offer_card}
                            key={item.id}
                            item={item}/>
                    ))}
                </div>
            </div>
            <div className={cn.faq_body}>
                {faqData.map(item => (
                    <Collapse
                        key={item.id}
                        id={item.id}
                        item={item}/>
                ))}
            </div>
        </LayoutSection>
    )
}

export default FAQ;
