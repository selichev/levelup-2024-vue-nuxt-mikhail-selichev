export default defineEventHandler((event) => {
    const query = getQuery(event);
    return $fetch(`https://dummyjson.com/products?limit=${query.limit || 10}`)
        .then((result) => {
            console.log('> server -> api/product: ', result);
            return result;
    });
})