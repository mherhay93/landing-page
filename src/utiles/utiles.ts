import {IFormat} from "./types";
import {IMealCard} from "../__Fake_Data__/types";

export function formatReplace({phone}: IFormat) {
    return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 ( $2 ) $3-$4-$5');
}

export function sumMealValues(meal: IMealCard[]) {
    return meal.reduce((acc, item) => {
        acc.cal = acc.cal + item.cal
        acc.weight = acc.weight + item.weight
        return acc
    }, {
        weight: 0,
        cal: 0
    })
}
