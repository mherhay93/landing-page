import Slider from "../Helpers/Slider";
import {bannerData} from "../../__Fake_Data__/data";
import BannerCard from "../Helpers/BannreCard";
import LayoutSection from "../LayoutSection";
import cn from './banner.module.css'

const Banner = () => {
    return (
        <LayoutSection>
            <div className={cn.container}>
                <Slider>
                    {bannerData.map(item => <BannerCard key={item.id} item={item}/>)}
                </Slider>
            </div>
        </LayoutSection>
    )
}

export default Banner;
