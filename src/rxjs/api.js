//const baseUserUrl = "http://localhost:3000/Product.json";
const baseUserUrl = "https://jsonplaceholder.typicode.com/todos";
export const getProduct = () => {
    return fetch(baseUserUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}