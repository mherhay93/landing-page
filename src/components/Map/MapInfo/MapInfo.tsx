import cn from '../mapRoot.module.css'
import {infoMap} from "../utiles";
import InfoItem from "./InfoItem";

const MapInfo = () => {
    return (
        <div className={cn.container_map_info}>
            <span className={cn.container_map_info_title}>Check the delivery price</span>
            <label className={cn.container_map_info_label}>
                enter address
                <input className={cn.container_map_info_input} placeholder="street,apt"/>
            </label>
            <div className={cn.info_item_block}>
                {infoMap.map(item => (
                    <InfoItem
                        key={item.id}
                        dotBg={item.dotBg}
                        description={item.description}
                    />))}
            </div>
        </div>
    )
}

export default MapInfo;
