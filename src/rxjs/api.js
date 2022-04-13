//const baseUserUrl = "http://localhost:3000/Product.json";
const baseUserUrl = "https://jsonplaceholder.typicode.com/todos";
//const baseUserUrl = "https://sushma26-dev.github.io/reactproject/product.json";
export const getProduct = () => {
    return fetch(baseUserUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}