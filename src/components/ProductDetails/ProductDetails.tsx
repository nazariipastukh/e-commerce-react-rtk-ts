import {useLocation} from "react-router-dom";
import styles from './ProductDetails.module.css'

export const ProductDetails = () => {
    const {state: product} = useLocation()
    const {id, description, image, title, price, category} = product

    return (
        <section className={styles.wrapper}>
            <figure className={styles.image}>
                <img src={image} alt={title}/>
            </figure>

            <section className={styles.textInfo} >
                <section>
                    <h2>
                        {title}
                    </h2>
                    <p className={styles.category}>
                        {`${category[0].toUpperCase()}${category.slice(1)}`}
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                </section>

                <section className={styles.buyInfo}>
                    <p>
                        {`${price}$`}
                    </p>

                    <button>Add To Cart</button>
                </section>
            </section>


        </section>
    );
};