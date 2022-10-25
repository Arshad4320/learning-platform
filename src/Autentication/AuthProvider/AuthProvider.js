import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../Firebase/Firebase';

export const contextProvider = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log out 
    const logOUt = () => {
        return signOut(auth)
    }

    //useEffect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return (() => {
            return unsubscribe
        })
    }, [])



    const authInfo = { createUser, userLogin, user, logOUt };
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;