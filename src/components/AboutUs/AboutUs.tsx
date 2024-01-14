import cn from './aboutUs.module.css'
import LayoutSection from "../LayoutSection";
import {aboutUsDataQ} from "../../__Fake_Data__/data";
import AboutItem from "./AboutItem";

const AboutUs = () => {
    return (
        <LayoutSection title='About Us' customClass='layout'>
            <div className={cn.container}>
                {aboutUsDataQ.map(item => (
                    <AboutItem key={item.id} item={item}/>
                ))}
            </div>
        </LayoutSection>
    )
}

export default AboutUs;
