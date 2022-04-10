const baseUserUrl = "http://localhost:3000/Product.json";

export const getProduct = () => {
    return fetch(baseUserUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}