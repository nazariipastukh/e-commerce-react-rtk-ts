import {useEffect, useState} from "react";

import {Category} from "./Category";
import {categoriesService} from "../../services";
import {categoriesIcons} from "../../assets/categoriesIcons";

export const CategoriesComponent = () => {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        categoriesService.then(({data}) => setCategories(data))
    }, [])

    const categoriesWithIcons = categories.map((category, index) => ({
        name: category,
        icon: categoriesIcons[index]
    }))

    return (
        <section>
            {
                categoriesWithIcons.map(category => <Category category={category}/>)
            }
        </section>
    );
};