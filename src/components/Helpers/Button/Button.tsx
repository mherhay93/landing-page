import {FC, ReactElement} from "react";
import cn from './button.module.css'

interface IProps {
    name: string | ReactElement,
    customClass?: string,
    customClassBtnName?: string,
}

const Button: FC<IProps> = ({name, customClass = '', customClassBtnName=''}) => {
    return (
        <button className={`${cn.container} ${customClass}`}>
            <div className={`${cn.name} ${customClassBtnName}`}>
                {name}
            </div>
        </button>
    )
}
export default Button;
