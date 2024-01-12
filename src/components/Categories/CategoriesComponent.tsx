import {useEffect, useState} from "react";

import {categoriesService} from "../../services/categoriesService";

export const CategoriesComponent = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        categoriesService.then(({data}) => setCategories(data))
    }, [])

    return (
        <section>
            {
                categories.map(category => <p>{category}</p>)
            }
        </section>
    );
};