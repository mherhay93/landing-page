import {idType} from "../../../types/types";
import infoIcon from '../../../assets/icons/info.png'
import {descInfoPop} from "../../Order/utiles";
import Percent from "../Percent";
import FreezeIcon from "../FreezeIcon";
import Popup from "../Popup";
import {IPickerItem} from "./types";
import cn from './selectPicker.module.css'
import {useState} from "react";

interface IProps {
    item: IPickerItem;
    isActive: boolean;
    onSelect: (id: idType) => void;
    customStyle?: string;
}

const PickerItem = ({item, isActive, onSelect, customStyle = ''}: IProps) => {
    const {title, id, freeze, percent, info} = item
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    
    const togglePopup = (val: boolean) => {
        setOpenPopup(val)
    }
    
    return (
        <div onClick={() => onSelect(id)} className={`${cn.picker_item} ${isActive ? cn.active : ''} ${customStyle}`}>
            <div className={cn.picker_item_title_container}>
                <div className={cn.picker_item_title}>
                    {title}
                    {info && (
                        <img
                            src={infoIcon}
                            alt="info"
                            onMouseOver={() => togglePopup(true)}
                            onMouseLeave={() => togglePopup(false)}
                        />
                    )}
                </div>
                {info && <span className={cn.picker_item_title_installments}>installments</span>}
            </div>
            {percent && <Percent customClass={cn.percent} value={percent}/>}
            {freeze && <FreezeIcon customClass={cn.freeze}/>}
            {openPopup && (
                <Popup
                    description={descInfoPop}
                />
            )}
        </div>
    )
}

export default PickerItem;
