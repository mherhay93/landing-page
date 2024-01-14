import cn from './testimonials.module.css'
import LayoutSection from "../LayoutSection";
import {testimonialsData} from "../../__Fake_Data__/data";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
    return (
        <LayoutSection title='Testimonials'>
            <div className={cn.container}>
                {testimonialsData.map(item => (
                    <TestimonialsCard key={item.id} item={item}/>
                ))}
            </div>
        </LayoutSection>
    )
}

export default Testimonials;
