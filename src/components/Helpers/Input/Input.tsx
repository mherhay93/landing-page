import cn from './input.module.css'
import {ChangeEvent, FC} from "react";

interface IProps {
    value?: string | number,
    onChange?: (v: string) => void,
    disabled?: boolean,
    type?: string,
}

const Input: FC<IProps> = ({value, onChange, disabled = false, type = 'text'}) => {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }
    
    
    return (
       <label className={cn.container}>
           {type === 'number' && <span className={cn.plus}>+</span>}
           <input
               className={cn.container_input}
               value={value}
               onChange={handleChange}
               type={type}
               disabled={disabled}
               id={'inp'}
           />
       </label>
    )
}

export default Input;
