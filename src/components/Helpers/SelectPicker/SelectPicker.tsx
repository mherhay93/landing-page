import {FC} from "react";
import PickerItem from "./PickerItem";
import {IPickerItem} from "./types";
import cn from './selectPicker.module.css'
import {idType} from "../../../types/types";

interface IProps {
    dataSource: IPickerItem[];
    onSelect: (id: idType) => void;
    selectedId: idType;
    customStyle?: string;
}

const SelectPicker: FC<IProps> = ({dataSource, selectedId, ...props}) => {
    return (
        <div className={cn.container}>
            {dataSource.map(item => (
                    <PickerItem
                        key={item.id}
                        isActive={item.id === selectedId}
                        item={item}
                        {...props}
                    />
                )
            )}
        </div>
    )
}

export default SelectPicker;
