import {navLinks} from "./utils";
import cn from './navbar.module.css'

const NavLinks = () => {
    return (
        <div className={cn.nav_links}>
            {navLinks.map(item => (
                <a className={cn.link} href={item.href} key={item.id}>{item.name}</a>
            ))}
        </div>
    )
}

export default NavLinks;
