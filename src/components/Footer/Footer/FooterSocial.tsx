import telegram from '../../../assets/icons/icons-telegram-64.png'
import insta from '../../../assets/icons/icons8-instagram-50.png'
import tik from '../../../assets/icons/icons8-tiktok-50.png'
import fb from '../../../assets/icons/icons8-fb-50.png'
import cn from '../footer.module.css'

const FooterSocial = () => {
    return (
        <div className={cn.social}>
        <a href={'/#'}><img src={telegram} alt='logo'/></a>
        <a href={'/#'}><img src={insta} alt='logo'/></a>
        <a href={'/#'}><img src={tik} alt='logo'/></a>
        <a href={'/#'}><img src={fb} alt='logo'/></a>
        </div>
    )
}

export default FooterSocial;
