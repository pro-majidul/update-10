import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const loginUser = (email, passwor) => {
        return signInWithEmailAndPassword(auth, email, passwor)

    }
    const createUser = (email, passwor) => {
        return createUserWithEmailAndPassword(auth, email, passwor)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false)
            }
            else {
                setUser(null)
                setLoader(false)
            }
        })


        return () => {
            onSubscribe()
        }
    }, [])


    const authInfo = {
        user, loader, setUser,
       loginUser , createUser, googleLogin, logOutUser
    }

    return <authContext.Provider value={authInfo}>
        {children}
        
    </authContext.Provider>
};

export default AuthProvider;