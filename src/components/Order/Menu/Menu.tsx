import {useState} from "react";
import SelectPicker from "../../Helpers/SelectPicker";
import {weekDays} from "../utiles";
import Title from "./Title";
import {idType} from "../../../types/types";
import {mealWithDays} from "../../../__Fake_Data__/data";
import cn from '../order.module.css'
import MealList from "./MealList";

const Menu = () => {
    const [selectedId, setSelectedId] = useState<idType>(0)
    
    const handleSelect = (id: idType) => {
        setSelectedId(id)
    }

    return (
        <div className={cn.menu_container}>
            <SelectPicker
                onSelect={handleSelect}
                selectedId={selectedId}
                dataSource={weekDays}
            />
            <Title dataSource={mealWithDays[selectedId]}/>
            <MealList dataSource={mealWithDays[selectedId]}/>
        </div>
    )
}

export default Menu;
