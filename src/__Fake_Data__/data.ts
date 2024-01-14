import sliderImg1 from '../assets/images/img.png'
import {IBannerData, IBannerOffer, ICoupon, IMeal, ITestimonialsItem} from "./types";

import info1 from '../assets/images/info1.png'
import info2 from '../assets/images/info2.png'
import info3 from '../assets/images/info3.png'
import info4 from '../assets/images/info4.png'

import meal1 from '../assets/images/meal1.png'
import meal2 from '../assets/images/meal2.png'
import meal3 from '../assets/images/meal3.png'

export const aboutUs = {
    phone: '37477777777'
}

export const bannerData: IBannerData[] = [
    {
        id: 1,
        bgImage: sliderImg1,
        title: 'Delicious breakfast, lunch and dinner',
        price: '660',
        discount: '499',
        promotionTitle: ' for 3 meals a day',
        offDate: new Date(new Date().getTime() + 1000000000)
    },
    {
        id: 2,
        bgImage: sliderImg1,
        title: 'Delicious breakfast, lunch and dinner',
        price: '880',
        discount: '500',
        promotionTitle: ' for 10 meals a day',
        offDate: new Date(new Date().getTime() + 500000000)
    },
]

export const bannerOffer: IBannerOffer[] = [
    {
        id: 1,
        description: 'Large hearty portions',
        img: info1
    },
    {
        id: 2,
        description: 'Free delivery every 2 days',
        img: info2
    },
    {
        id: 3,
        description: 'Fresh products, cooking in Yerevan',
        img: info3
    },
    {
        id: 4,
        description: 'Just need a microwave',
        img: info4
    },
]

export const mealWithDays: IMeal = {
    0: [
        {
            id: 1,
            img: meal1,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 2,
            img: meal2,
            title: 'Title of meal 2',
            weight: 18,
            cal: 240
        },
        {
            id: 3,
            img: meal3,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
    ],
    1: [
        {
            id: 1,
            img: meal1,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 3,
            img: meal3,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
    ],
    2: [
        {
            id: 1,
            img: meal2,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
    ],
    3: [
        {
            id: 1,
            img: meal3,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 2,
            img: meal1,
            title: 'Title of meal 2',
            weight: 18,
            cal: 240
        },
        {
            id: 3,
            img: meal2,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
        
    ],
    4: [
        {
            id: 1,
            img: meal2,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 2,
            img: meal1,
            title: 'Title of meal 2',
            weight: 18,
            cal: 240
        },
        {
            id: 3,
            img: meal1,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
    ],
    5: [
        {
            id: 1,
            img: meal1,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 2,
            img: meal2,
            title: 'Title of meal 2',
            weight: 18,
            cal: 240
        },
        {
            id: 3,
            img: meal3,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
        {
            id: 4,
            img: meal3,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
    ],
    6: [
        {
            id: 1,
            img: meal2,
            title: 'Title of meal 1',
            weight: 180,
            cal: 200
        },
        {
            id: 2,
            img: meal1,
            title: 'Title of meal 2',
            weight: 18,
            cal: 240
        },
        {
            id: 3,
            img: meal1,
            title: 'Title of meal 3',
            weight: 80,
            cal: 201
        },
    ],
}


export const couponData:ICoupon = {
    1: {
        countMeal:36,
        days: 12,
        price: 660,
        sale: -2040,
        delivery: 0
    },
    2: {
        countMeal:59,
        days: 24,
        price: 580,
        sale: -6000,
        delivery: 0
    },
    3: {
        countMeal:80,
        days: 36,
        price: 460,
        sale: -8500,
        delivery: 0
    },
    4: {
        countMeal:80,
        days: 36,
        price: 500,
        sale: -9000,
        delivery: 0
    },
}

export const testimonialsData:ITestimonialsItem[] = [
    {
        id: 1,
        img: meal1,
        title: '01.01.2023'
    },
    {
        id: 2,
        img: meal3,
        title: '01.10.2023'
    },
    {
        id: 3,
        img: meal2,
        title: '12.01.2023'
    },
    // {
    //     id: 4,
    //     img: meal3,
    //     title: '16.11.2023'
    // },
]
