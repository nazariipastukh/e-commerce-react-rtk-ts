import {useEffect, useState} from "react";

import {productsService} from "../../services/productsService";
import {ProductComponent} from "../Product";
import styles from './List.module.css'

export const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productsService.getAll().then(({data}) => setProducts(data))
    }, [])

    return (
        <section className={styles.list}>
            {
                products.map(product => <ProductComponent product={product}/>)
            }
        </section>
    );
};