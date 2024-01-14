import {FC, useState} from "react";
import {couponData} from "../../../__Fake_Data__/data";
import {idType} from "../../../types/types";
import infoIcon from '../../../assets/icons/info.png'
import cn from '../order.module.css'
import Input from "../../Helpers/Input";
import Button from "../../Helpers/Button";

interface IProps {
    selectedId: idType;
}

const CouponBody: FC<IProps> = ({selectedId}) => {
    const {days, countMeal, sale, price, delivery} = couponData[selectedId]
    const [phoneValue, setPhoneValue] = useState<number>(374)
    const phoneNumberHandler = (v: string) => {
        setPhoneValue(prev => prev.toString().includes('374') ? +v : +`+374${v}`);
    }
    
    
    return (
        <div className={cn.coupon_body}>
            <div className={cn.coupon_body_items}>
                <div className={cn.coupon_body_item}>
                    <span>{countMeal} meal, {days} days</span>
                    <span>{price} AMD for day</span>
                </div>
                <div className={cn.coupon_body_item}>
                    <div className={cn.coupon_body_item_title}>
                        <span>Sale</span>
                        <img alt='info' src={infoIcon}/>
                    </div>
                    <span className={cn.coupon_body_item_sale}>{sale} AMD</span>
                </div>
                <div className={cn.coupon_body_item}>
                    <div className={cn.coupon_body_item_title}>
                        <span>Delivery</span>
                        <img alt='info' src={infoIcon}/>
                    </div>
                    <span>{delivery} AMD</span>
                </div>
            </div>
            <div className={cn.coupon_body_phone}>
                <span className={cn.coupon_title}>Your telephone number</span>
                <Input
                    onChange={phoneNumberHandler}
                    value={phoneValue}
                    type={'number'}
                />
                <span className={cn.coupon_body_phone_subtitle}>to clarify details of the order</span>
            </div>
            <Button
                customClass={cn.coupon_body_button}
                name={(
                <div className={cn.coupon_body_button_title}>
                    <span>Order</span>
                    <span>{price * countMeal} AMD</span>
                </div>
            )} />
        </div>
    )
}

export default CouponBody;
