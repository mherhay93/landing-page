import {idType} from "../types/types";

export interface IBannerData {
    id: idType;
    bgImage: string;
    title: string;
    price: string;
    discount: string;
    promotionTitle: string;
    offDate: Date
}

export interface IBannerOffer {
    id: idType;
    description: string;
    img: string;
}

export interface IMealCard {
    id: idType;
    img: string;
    title: string;
    weight: number;
    cal: number
}

export interface IMeal {
    [key: idType]: IMealCard[]
}


export interface ICouponItem {
    countMeal:number,
    days: number,
    price: number,
    sale: number,
    delivery: number
}
export interface ICoupon {
    [key: idType]: ICouponItem
}

export interface ITestimonialsItem {
    id: idType;
    img: string;
    title: string;
}
