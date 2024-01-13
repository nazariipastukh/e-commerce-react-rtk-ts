import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IProduct} from "../../interfaces/ProductInterface";
import styles from './Product.module.css'

interface IProps {
    product: IProduct
}

export const ProductComponent: FC<IProps> = ({product}) => {
    const {id, description, image, title, price, category} = product

    return (
        <section className={styles.card}>
            <section className={styles.image}>
                <img src={image} alt={title}/>
            </section>

            <section className={styles.cardInfo}>
                <section>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <NavLink className={styles.category} to={`/category/${category}`}>
                        {`${category[0].toUpperCase()}${category.slice(1)}`}
                    </NavLink>
                </section>

                <section className={styles.cardBottom}>
                    <p className={styles.price}>
                        {`${price}$`}
                    </p>
                    <button>
                        Add To Cart
                    </button>
                </section>
            </section>
        </section>
    );
};