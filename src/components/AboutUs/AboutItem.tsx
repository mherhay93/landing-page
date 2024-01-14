import cn from './aboutUs.module.css'
import {IAboutUsQ} from "../../__Fake_Data__/types";
import {FC} from "react";

interface IProps {
    item: IAboutUsQ
}

const AboutItem: FC<IProps> = ({item}) => {
    const {steps, title} = item
    return (
        <div>
            <div className={cn.about_item_title}>{title}</div>
            <div className={cn.about_item_body}>
                {steps.map(item => (
                    <div className={cn.about_items} key={Math.random()}>
                        <div className={cn.about_item_dot}></div>
                        <span className={cn.about_item_desc}>&emsp;{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutItem;
