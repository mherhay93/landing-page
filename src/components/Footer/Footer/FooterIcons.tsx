import cn from '../footer.module.css'
import logo from '../../../assets/images/logo.png'
import visa from '../../../assets/icons/visa-2.svg'
import master from '../../../assets/icons/masterCard.svg'
import id from '../../../assets/icons/idBank.png'
const FooterIcons = () => {
    return (
        <div className={cn.footer_icons}>
            <img className={cn.logo} alt="logo" src={logo}/>
            <div className={cn.bank}>
                <img src={visa} alt="logo"/>
                <img src={master} alt="logo"/>
                <img src={id} alt="logo"/>
            </div>
        </div>
    )
}

export default FooterIcons;
