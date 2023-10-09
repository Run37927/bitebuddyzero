import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebaseConfig';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // This listener is called whenever the user's authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("listener triggered: ", user);

            if (user) {
                const uid = user.uid;
                console.log(uid);
                setUser(user);
            } else {
                // user is signed out or not logged in
                setUser(null);
            }

            setLoadingInitial(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    const signIn = async (email, password) => {
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("logged in with :", user.email)
            // console.log("Current user according to Firebase: ", auth.currentUser);
            setUser(user);
        } catch (error) {
            console.error("error logging in: ", error)
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (email, password) => {
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("signed up with :", user.email)
        } catch (error) {
            console.error("error signing up: ", error)
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signUp,
            signOut,
        }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}