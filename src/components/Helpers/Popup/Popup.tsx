import cn from './popup.module.css'
import {FC} from "react";

interface IProps {
    type?:'top' | 'bottom';
    description:string;
}

const Popup:FC<IProps> = ({type= 'top', description}) => {
    return (
        <div className={`${cn.container} ${type === 'top' ? cn.top : cn.bottom}`}>
            {description}
            <div className={cn.polygon}></div>
        </div>
    )
}

export default Popup;
