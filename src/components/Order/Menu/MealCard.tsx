import {FC} from "react";
import {IMealCard} from "../../../__Fake_Data__/types";
import cn from '../order.module.css'

interface IProps {
    item: IMealCard
}

const MealCard: FC<IProps> = ({item}) => {
    const {title, img, weight, cal} = item
    return (
        <div className={cn.meal_card}>
            <div className={cn.meal_card_body}>
                <img alt={'meal'} src={img}/>
                <span className={cn.meal_card_body_title}>{title}</span>
            </div>
            <span className={cn.meal_card_body_desc}>{`${weight} g / ${cal} ccal`}</span>
        </div>
    )
}

export default MealCard;
