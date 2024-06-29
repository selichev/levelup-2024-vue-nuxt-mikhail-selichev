import type { ICard, IProductVO, Products } from '~/interfaces'

const useCard = (): ICard => {
    const data = useState<Products>('card', () => []);
    return {
        get amount() { return computed (() => data.value.length) },
        add(product: IProductVO): any {
            data.value.push(product);
        },
        remove(product: IProductVO): any {
            const index = data.value.findIndex(p => p === product);
            if (index >= 0) {
                data.value.splice(index, 1);
            }
        }
        // retrieve(limit: number = 10, immediate: boolean = true): any {
        //     const config = useRuntimeConfig();
        //     console.log('> config.public.SERVER_URL -> ', config.public)
        //     const url = `${config.public.SERVER_URL}/products?limit=${limit}`;
        //     return useFetch(url, { immediate })
        //         .then((result) => {
        //             console.log('> useCard -> retrieveL result =', result.data.value);
        //             data.value = result.data.value as any;
        //         });
        // }
    }
}

export default useCard;