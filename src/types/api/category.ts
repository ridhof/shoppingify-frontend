import { Category } from "../model/category";
import { APIResponseArray } from "./primitive";

type SearchCategoryResponse = APIResponseArray<Category>;

export type { SearchCategoryResponse };