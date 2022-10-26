import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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
    //singIn google
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // signIn Github
    const githubSignIn = (githubProvider) => {
        return signInWithPopup(auth, githubProvider)
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

    const authInfo = { createUser, userLogin, user, logOUt, googleSignIn, githubSignIn };
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;