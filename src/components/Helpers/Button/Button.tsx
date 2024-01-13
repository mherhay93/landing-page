import {FC} from "react";
import cn from './button.module.css'

interface IProps {
    name: string
}

const Button: FC<IProps> = ({name}) => {
    return (
        <button className={cn.container}>
            <span className={cn.name}>
                {name}
            </span>
        </button>
    )
}

export default Button;
