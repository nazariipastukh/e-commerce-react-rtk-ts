import {NavLink} from "react-router-dom";

import styles from './Header.module.css'
import logo from '../../assets/logo.jpg'
import trolley from '../../assets/trolley.png'


export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.logo}>
                <NavLink to={'/main'}>
                    <img className={styles.logo} src={logo} alt={'logo'}/>
                </NavLink>
            </section>

            <>
                <NavLink to={'/cart'}>
                    <img className={styles.cartIcon} src={trolley} alt={'cart'}/>
                </NavLink>
            </>
        </header>
    );
};