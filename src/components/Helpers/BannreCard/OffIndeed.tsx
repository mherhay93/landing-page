import {FC, useCallback, useEffect, useState} from "react";
import cn from './bannerCard.module.css'

interface IProps {
    date: Date;
}

const OffIndeed: FC<IProps> = ({date}) => {
    const calculateTime = useCallback(() => {
        const difference = date.getTime() - new Date().getTime();
        
        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0};
        }
        
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return {hours, minutes, seconds};
    }, [date]);
    
    const [timeLeft, setTimeLeft] = useState(calculateTime);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTime);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, [timeLeft, calculateTime]);
    
    return (
        <div className={cn.off_indeed}>
            <span className={cn.off_indeed_text}>The off indeed</span>
            <div className={`${cn.off_indeed_text} ${cn.timer}`}>
                <span>{timeLeft.hours}</span>:
                <span>{timeLeft.minutes}</span>:
                <span>{timeLeft.seconds}</span>
            </div>
        </div>
    )
}

export default OffIndeed;
