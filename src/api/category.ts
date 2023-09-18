import useSWR, { Fetcher } from "swr";

import { SearchCategoryResponse } from "~/types/api/category";

function fetchCategorySearch(query: string) {
    const fetcher: Fetcher<SearchCategoryResponse, string> = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `${process.env.API_BASE_URL}/kategori/search?namaKategori=${query}`,
        fetcher,
    );
    return {
        category: data,
        isLoading,
        isError: error,
    };
}

export { fetchCategorySearch };