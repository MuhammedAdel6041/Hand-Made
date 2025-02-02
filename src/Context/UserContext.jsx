import  { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export let userContext = createContext();

export default function UserContextProvider(props) {
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));

    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            setUserToken(localStorage.getItem('userToken'));
        }
    }, []);

    return (
        <userContext.Provider value={{ userToken, setUserToken }}>
            {props.children}
        </userContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
