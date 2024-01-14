import {FC, ReactElement} from "react";
import cn from './layoutSection.module.css'

interface IProps {
    children: ReactElement | ReactElement[];
    title?: string;
    customClass?:string;
}

const LayoutSection: FC<IProps> = ({children, title, customClass = ''}) => {
    return (
        <div className={`${cn.container} ${customClass}`}>
            {title && <span className={cn.title}>{title}</span>}
            {children}
        </div>
    )
}

export default LayoutSection;
