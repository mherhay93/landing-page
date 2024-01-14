import {IBannerOffer} from "../../../__Fake_Data__/types";
import cn from './offerCard.module.css'

interface IProps {
    item:IBannerOffer,
    customClass?:string,
    customClassImg?:string,
}
const OfferCard = ({item, customClass, customClassImg}:IProps) => {
    const { img, description } = item
    return (
        <div className={`${cn.offer_card} ${customClass}`}>
            <img className={`${cn.offer_card_img} ${customClassImg}`} alt={'img'} src={img}/>
            <span className={cn.offer_card_description}>{description}</span>
        </div>
    )
}

export default OfferCard;
