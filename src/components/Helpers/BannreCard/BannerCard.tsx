import cn from './bannerCard.module.css'
import {IBannerData} from "../../../__Fake_Data__/types";
import Context from "../../../context/Context";
import {scrollToElement} from "../../../utiles/utiles";
import {FC, useContext} from "react";
import Button from "../Button";
import OffIndeed from "./OffIndeed";

interface IProps {
    item: IBannerData
}

const BannerCard: FC<IProps> = ({item}) => {
    const {bgImage, title, price, discount, promotionTitle} = item
    const context = useContext(Context)
    return (
        <div className={cn.container}>
            <img className={cn.slider_img} alt={'img'} src={bgImage}/>
            <div className={cn.description}>
                <span className={`${cn.text} ${cn.title}`}>{title}</span>
                <div className={cn.price_block}>
                    <span className={`${cn.text} ${cn.discount}`}>{discount} AMD</span>
                    <span className={cn.price}>{price} AMD</span>
                </div>
                <span className={cn.promotion}>{promotionTitle}</span>
                <Button
                    onClick={() => scrollToElement(context)}
                    customClass={cn.button}
                    customClassBtnName={cn.btn_text}
                    name={'ORDER NOW'}/>
            </div>
            <OffIndeed date={item.offDate}/>
        </div>
    )
}

export default BannerCard;
