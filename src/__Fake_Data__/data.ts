import sliderImg1 from '../assets/images/img.png'
import {IBannerData} from "./types";

export const aboutUs = {
    phone: '37477777777'
}

export const bannerData:IBannerData[] = [
    {
        id:1,
        bgImage:sliderImg1,
        title:'Delicious breakfast, lunch and dinner',
        price:'660',
        discount:'499',
        promotionTitle:' for 3 meals a day',
        offDate: new Date(new Date().getTime() + 1000000000)
    },
    {
        id:2,
        bgImage:sliderImg1,
        title:'Delicious breakfast, lunch and dinner',
        price:'880',
        discount:'500',
        promotionTitle:' for 10 meals a day',
        offDate: new Date(new Date().getTime() + 500000000)
    },
]
