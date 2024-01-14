import cn from './percent.module.css'
import {FC} from "react";

interface IProps {
    customClass?:string,
    value: string
}
const Percent:FC<IProps> = ({customClass = '', value}) => {
    return (
        <div className={`${cn.container} ${customClass}`}>
            <span className={cn.value}>{value}%</span>
        </div>
    )
}

export default Percent;
