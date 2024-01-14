import cn from '../order.module.css'
import {IMealCard} from "../../../__Fake_Data__/types";
import {sumMealValues} from "../../../utiles/utiles";

interface IProps {
    dataSource:IMealCard[]
}

const Title = ({dataSource}:IProps) => {
    const {  cal } = sumMealValues(dataSource)
    return (
        <div className={cn.title_container}>
            <span className={cn.title_meal}>{dataSource.length} meals,</span>
            <span className={cn.title_ccal}>{cal} ccal</span>
        </div>
    )
}

export default Title;
