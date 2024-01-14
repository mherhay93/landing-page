import cn from './testimonials.module.css'
import {ITestimonialsItem} from "../../__Fake_Data__/types";
import {FC} from "react";

interface IProps {
    item: ITestimonialsItem
}

const TestimonialsCard: FC<IProps> = ({item}) => {
    const {img, title} = item
    return (
        <div className={cn.testimonials_card}>
            <span className={cn.testimonials_card_title}>{title}</span>
            <img className={cn.testimonials_card_img} alt="img" src={img}/>
        </div>
    )
}

export default TestimonialsCard;
