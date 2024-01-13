import {FC, ReactElement, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
    children: ReactElement | ReactElement[]
}

const Slid: FC<IProps> = ({children}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    
    const sliderRef = useRef<Slider>(null);
    
    const handleScroll = (e: any) => {
        if (e.deltaY > 0 && sliderRef.current) {
            sliderRef.current.slickNext();
        } else if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    
    return (
        <div onWheel={handleScroll}>
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default Slid;
