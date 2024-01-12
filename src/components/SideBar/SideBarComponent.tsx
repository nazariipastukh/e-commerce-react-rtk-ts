import {CategoriesComponent} from "../Categories";
import styles from './SideBar.module.css'

export const SideBarComponent = () => {
    return (
        <section className={styles.sideBar}>
            <CategoriesComponent/>
        </section>
    );
};