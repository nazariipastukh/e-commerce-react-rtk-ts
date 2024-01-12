import {FC} from "react";

import {IProduct} from "../../interfaces/ProductInterface";

interface IProps {
    product: IProduct
}

export const ProductComponent: FC<IProps> = ({product}) => {
    const {id, description, image, title, price, category} = product

    return (
        <section>
            {title}
        </section>
    );
};