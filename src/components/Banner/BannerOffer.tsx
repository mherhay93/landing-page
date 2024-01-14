import cn from './banner.module.css'
import {bannerOffer} from "../../__Fake_Data__/data";
import OfferCard from "./OfferCard";

const BannerOffer = () => {
    return (
        <div className={cn.offer_container}>
            {bannerOffer.map(item => <OfferCard key={item.id} item={item} />)}
        </div>
    )
}

export default BannerOffer;
