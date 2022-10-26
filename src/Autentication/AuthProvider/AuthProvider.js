import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase';

export const contextProvider = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user login
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //log out 
    const logOUt = () => {
        setLoader(true)
        return signOut(auth)
    }
    //singIn google
    const googleSignIn = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    // signIn Github
    const githubSignIn = (githubProvider) => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    //useEffect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return (() => {
            return unsubscribe
        })
    }, [])

    const authInfo = { createUser, userLogin, user, logOUt, googleSignIn, githubSignIn, loader };
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;