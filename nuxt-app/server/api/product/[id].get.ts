export default defineEventHandler((event) => {
    const query = getQuery(event);
    return $fetch(`https://dummyjson.com/products/`)
        .then((result) => {
            console.log('> server -> api/product: ', result);
            return result;
        });
})