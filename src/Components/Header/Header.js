import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={s.mainHeader}>
            <NavLink className={s.headerLink} to='/'>
                Home
            </NavLink>
        </header>
    )
}

export default Header;