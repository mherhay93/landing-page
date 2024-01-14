import {FC} from "react";
import {IMealCard} from "../../../__Fake_Data__/types";
import MealCard from "./MealCard";
import cn from '../order.module.css'

interface IProps {
    dataSource:IMealCard[]
}

const MealList:FC<IProps> = ({dataSource}) => {
    return (
        <div className={cn.meal_list}>
            {dataSource.map(item => <MealCard key={item.id} item={item}/>)}
        </div>
    )
}

export default MealList;
