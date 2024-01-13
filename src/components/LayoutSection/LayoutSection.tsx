import {FC, ReactElement} from "react";
import cn from './layoutSection.module.css'

interface IProps {
    children: ReactElement | ReactElement[];
    title?: string;
}

const LayoutSection: FC<IProps> = ({children, title}) => {
    return (
        <div className={cn.container}>
            {title && <span className={cn.title}>{title}</span>}
            {children}
        </div>
    )
}

export default LayoutSection;
