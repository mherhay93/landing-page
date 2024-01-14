import cn from '../mapRoot.module.css'
import {FC} from "react";

interface IProps {
    dotBg: string,
    description:string
}

const InfoItem:FC<IProps> = ({description, dotBg}) => {
    return (
        <div className={cn.info_item}>
            <span style={{background: dotBg}} className={cn.info_item_dot}></span>
            <span className={cn.info_item_desc}>{description}</span>
        </div>
    )
}

export default InfoItem;
