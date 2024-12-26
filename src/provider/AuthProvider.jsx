import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

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


    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

        })
    }

    const logOutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.email) {
                const data = { email: currentUser.email }
                axios.post('http://localhost:5000/jwt', data, { withCredentials: true })
                    .then((res) => {
                        // console.log('create web json token', res.data);
                        setUser(currentUser);

                        setLoader(false)
                    })
            } else {
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log('user logout and delete token', res.data);
                        setUser('')
                        setLoader(false)
                    })
            }
            // console.log(currentUser);
        })


        return () => {
            onSubscribe()
        }
    }, [])


    const authInfo = {
        user, loader, setUser,
        loginUser, createUser, googleLogin, logOutUser, updateUserInfo
    }

    return <authContext.Provider value={authInfo}>
        {children}

    </authContext.Provider>
};

export default AuthProvider;