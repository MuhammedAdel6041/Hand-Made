
import PropTypes from 'prop-types';
import { createContext } from "react";
import axios from "axios";

export let CartContext = createContext();

export default function CartContextProvider(props) {
    const userToken = localStorage.getItem('userToken');
    let headers = {
        Authorization: `Bearer ${userToken}`,
        Token: userToken
    };

    function addToCart(productId) {
        return axios.post(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart`,
            { productId: productId },
            { headers: headers }).then((response) => response)
            .catch((error) => error);
    }

    function displayUserCart() {
        return axios.get(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/cart/`,
            { headers: headers }).then((response) => response)
            .catch((error) => error);
    }

    return (
        <CartContext.Provider value={{ addToCart, displayUserCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
