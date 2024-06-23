import type { IProducts } from "~/interfaces";

const useProducts = (): IProducts => {
    const data = useState<any>('products', () => []);
    return {
        get total() { return computed(() => data.value?.total || 0) },
        get list() { return computed(() => data.value.products) },
        retrieve(limit: number = 10): any {
            return useFetch(`https://dummyjson.com/products?limit=${limit}`)
                .then((result) => {
                    data.value = result.data.value as any;
                });
        }
    }
}
export default useProducts;