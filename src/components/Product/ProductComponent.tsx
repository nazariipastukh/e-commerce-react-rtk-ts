import {FC} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import {IProduct} from "../../interfaces/ProductInterface";
import styles from './Product.module.css'

interface IProps {
    product: IProduct
}

export const ProductComponent: FC<IProps> = ({product}) => {
    const {id, image, title, price, category} = product

    const navigate = useNavigate()

    return (
        <section className={styles.card} onClick={() => navigate(`/${category}/${id}`, {state: product})}>
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