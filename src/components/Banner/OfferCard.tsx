import {IBannerOffer} from "../../__Fake_Data__/types";
import cn from './banner.module.css'

interface IProps {
    item:IBannerOffer
}
const OfferCard = ({item}:IProps) => {
    const { img, description } = item
    return (
        <div className={cn.offer_card}>
            <img className={cn.offer_card_img} alt={'img'} src={img}/>
            <span className={cn.offer_card_description}>{description}</span>
        </div>
    )
}

export default OfferCard;
