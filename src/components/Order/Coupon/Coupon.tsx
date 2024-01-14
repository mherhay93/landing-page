import CouponBody from "./CouponBody";
import CouponHeader from "./CouponHeader";
import cn from '../order.module.css'
import {useState} from "react";
import {idType} from "../../../types/types";

const Coupon = () => {
    const [selectedId, setSelectedId] = useState<idType>(1)
    
    const handleSelect = (id: idType) => {
        setSelectedId(id)
    }
    
    return (
        <div className={cn.coupon_container}>
            <CouponHeader
                onSelect={handleSelect}
                selectedId={selectedId}
            />
            <CouponBody
                selectedId={selectedId}
            />
        </div>
    )
}

export default Coupon;
