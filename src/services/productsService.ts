import {apiService} from "./apiService";
import {urls} from "../constants";

const productsService = {
    getAll: () => apiService.get(urls.products)
}

export {
    productsService
}