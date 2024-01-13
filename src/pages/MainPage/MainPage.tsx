import {ProductsList} from "../../components/ProductsList";
import {SearchComponent} from "../../components/Search";
import {SelectComponent} from "../../components/Select";
import {PaginationComponent} from "../../components/Pagination";
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <>
            <section className={styles.inputsWrapper}>
                <SearchComponent/>
                <SelectComponent/>
            </section>

            <ProductsList/>

            <section className={styles.paginationWrapper}>
                <PaginationComponent/>
            </section>
        </>
    );
};