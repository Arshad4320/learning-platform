import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase';

export const contextProvider = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const userLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { userLogin };
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;