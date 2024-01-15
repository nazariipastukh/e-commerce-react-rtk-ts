import {ProductDetails} from "../../components/ProductDetails/ProductDetails";
import styles from './ProductPage.module.css'

export const ProductPage = () => {
    return (
        <section className={styles.page}>
            <ProductDetails/>
        </section>
    );
};