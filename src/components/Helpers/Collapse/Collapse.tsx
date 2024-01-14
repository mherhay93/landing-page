import cn from './Collapse.module.css'
import iconArrow from '../../../assets/icons/arrow.svg'
import {FC, useState} from "react";
import {idType} from "../../../types/types";
import {IFAQData} from "../../../__Fake_Data__/types";

interface IProps {
    id: idType;
    item: IFAQData
}

const Collapse: FC<IProps> = ({id, item}) => {
    const [selectedId, setSelectedId] = useState<idType>(0)
    const [open, setOpen] = useState(false)
    const {title, description} = item
    const handleSelect = () => {
        if (id === selectedId && open) {
            setOpen(false)
        } else {
            setSelectedId(id)
            setOpen(true)
        }
    }

    return (
        <div className={cn.container}>
            <div onClick={handleSelect} className={cn.header}>
                <span className={cn.header_title}>{title}</span>
                <img className={`${cn.arrow} ${(id === selectedId && open) ? cn.open_arrow : ''}`} src={iconArrow} alt={'img'}/>
            </div>
            <div className={`${cn.content} ${(id === selectedId && open) ? cn.open : ''}`}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Collapse;
