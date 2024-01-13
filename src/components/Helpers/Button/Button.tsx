import {FC} from "react";
import cn from './button.module.css'

interface IProps {
    name: string,
    customClass?: string,
    customClassBtnName?: string,
}

const Button: FC<IProps> = ({name, customClass = '', customClassBtnName=''}) => {
    return (
        <button className={`${cn.container} ${customClass}`}>
            <span className={`${cn.name} ${customClassBtnName}`}>
                {name}
            </span>
        </button>
    )
}
export default Button;
