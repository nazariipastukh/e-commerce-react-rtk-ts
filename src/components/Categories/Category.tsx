import React, {FC, ReactElement} from "react";
import { NavLink } from "react-router-dom";

import styles from './Category.module.css';

interface ICategory {
    name: string;
    icon: ReactElement;
}

interface IProps {
    category: ICategory;
}

export const Category: FC<IProps> = ({ category}) => {
    const { name, icon } = category;

    return (
        <section className={styles.category}>
            <NavLink to={`/category/${name}`}>
                <p className={styles.icon}>{icon}</p>
                <p className={styles.name}>{`${name[0].toUpperCase()}${name.slice(1)}`}</p>
            </NavLink>
        </section>
    );
};
