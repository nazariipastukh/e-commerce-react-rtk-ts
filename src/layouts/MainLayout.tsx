import {Outlet} from "react-router-dom";

import {SideBarComponent} from "../components/SideBar"
import {Header} from "../components/Header";
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <>
            <Header/>

            <section className={styles.mainLayout}>
                <section>
                    <SideBarComponent/>
                </section>

                <section className={styles.content}>
                    <Outlet/>
                </section>
            </section>
        </>
    );
};