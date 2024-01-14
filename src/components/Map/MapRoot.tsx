import Map from "./MapBlock/Map";
import MapInfo from "./MapInfo/MapInfo";
import LayoutSection from "../LayoutSection";
import cn from './mapRoot.module.css'

const MapRoot = () => {
    return (
        <LayoutSection title={'Delivery Map'} customClass='layout'>
            <div className={cn.container}>
                <Map/>
                <MapInfo/>
            </div>
        </LayoutSection>
    )
}

export default MapRoot;
