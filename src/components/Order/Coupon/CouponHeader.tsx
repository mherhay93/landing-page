import SelectPicker from "../../Helpers/SelectPicker";
import {couponTimes} from "../utiles";
import cn from "../order.module.css";
import {idType} from "../../../types/types";
import {FC} from "react";

interface IProps {
    onSelect: (id: idType) => void;
    selectedId: idType;
}

const CouponHeader:FC<IProps> = ({onSelect, selectedId}) => {

    return (
        <div className={cn.coupon_header}>
            <span className={cn.coupon_title}>Duration</span>
            <SelectPicker
                dataSource={couponTimes}
                onSelect={onSelect}
                selectedId={selectedId}
                customStyle={cn.coupon_container_picker_item}
            />
            <span className={cn.line}></span>
        </div>
    )
}

export default CouponHeader;
