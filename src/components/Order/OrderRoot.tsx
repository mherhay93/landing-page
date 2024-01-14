import {MutableRefObject, useContext, useEffect, useRef} from "react";
import Context from "../../context/Context";
import LayoutSection from "../LayoutSection";
import Menu from "./Menu/Menu";
import Coupon from "./Coupon/Coupon";
import cn from './order.module.css';

const OrderRoot = () => {
    const refOrder:MutableRefObject<null> = useRef(null)
    const context = useContext(Context);
    
    
    useEffect(() => {
        context?.dispatch({ type: 'UPDATE_VALUE', payload: refOrder })
    }, [refOrder]);
    
    return (
        <LayoutSection title={'Sample menu for the day'}>
            <div ref={refOrder} className={cn.container}>
                <Menu/>
                <Coupon/>
            </div>
        </LayoutSection>
    )
}

export default OrderRoot;
