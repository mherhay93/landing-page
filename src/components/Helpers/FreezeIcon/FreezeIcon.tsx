import {FC, useState} from "react";
import Popup from "../Popup";
import cn from './freezeIcon.module.css'
import IconFreeze from "../../../assets/icons/IconFreeze";
import {descFreezePop} from "../../Order/utiles";

interface IProps {
    customClass?: string;
}

const FreezeIcon: FC<IProps> = ({customClass = ''}) => {
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    
    const togglePopup = (val: boolean) => {
        setOpenPopup(val)
    }
    
    return (
        <div
            onMouseOver={() => togglePopup(true)}
            onMouseLeave={() => togglePopup(false)}
            className={`${cn.container} ${customClass}`}
        >
            <IconFreeze/>
            {openPopup && (
                <Popup
                    description={descFreezePop}
                    type={'bottom'}
                />
            )}
        </div>
    )
}

export default FreezeIcon;
