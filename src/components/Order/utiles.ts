import {IPickerItem} from "../Helpers/SelectPicker/types";

export const weekDays: IPickerItem[] = [
    {
        id: 0,
        title: 'mon'
    },
    {
        id: 1,
        title: 'tu'
        
    },
    {
        id: 2,
        title: 'we'
        
    },
    {
        id: 3,
        title: 'thu'
        
    },
    {
        id: 4,
        title: 'fri'
        
    },
    {
        id: 5,
        title: 'sat'
        
    },
    {
        id: 6,
        title: 'sun'
        
    },
]

export const couponTimes: IPickerItem[] = [
    {
        id: 1,
        title: '3 days'
    },
    {
        id: 2,
        title: '2 weeks',
        percent: '-26'
    },
    {
        id: 3,
        title: 'Month',
        percent: '-43',
        freeze: true,
    },
    {
        id: 4,
        title: 'Month',
        info: 'Choosing a month in installments - 4 payments 2,994 amd per week.'
    }
]

export const descFreezePop = 'You can freez subscription without losing money'
export const descInfoPop = 'Choosing a month in installments - 4 payments 2,994 amd per week.'

