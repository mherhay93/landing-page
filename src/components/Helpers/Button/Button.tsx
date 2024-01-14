import {FC, ReactElement} from "react";
import cn from './button.module.css'

interface IProps {
    name: string | ReactElement,
    customClass?: string,
    customClassBtnName?: string,
    onClick?: () => void
}

const Button: FC<IProps> = ({name, customClass = '', customClassBtnName='', onClick}) => {
    return (
        <button onClick={onClick} className={`${cn.container} ${customClass}`}>
            <div className={`${cn.name} ${customClassBtnName}`}>
                {name}
            </div>
        </button>
    )
}
export default Button;
