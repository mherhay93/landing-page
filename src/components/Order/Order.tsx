import LayoutSection from "../LayoutSection";
import Menu from "./Menu/Menu";
import Coupon from "./Coupon/Coupon";
import cn from './order.module.css';

const Order = () => {
    return (
        <LayoutSection title={'Sample menu for the day'}>
            <div className={cn.container}>
                <Menu/>
                <Coupon/>
            </div>
        </LayoutSection>
    )
}

export default Order;
