import {apiService} from "./apiService";
import {urls} from "../constants";

const categoriesService = apiService.get(urls.categories)

export {
    categoriesService
}