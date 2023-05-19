import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setDisplayNamePhotoUrl = (name, photoUrl)=>{
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl})
}

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
      //   if(currentUser && currentUser.email)
      //   {
      //     const loggedUser = {
      //       email : currentUser.email
      //     }
      //     fetch('https://car-doctor-server-five-teal.vercel.app/jwt',{
      //       method: 'POST',
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       body: JSON.stringify(loggedUser)
      //     })
      //     .then(res=> res.json())
      //     .then(data => {
      //       console.log('jwt response', data);
      //       // setting token into localStorage
      //       localStorage.setItem('car-access-token', data.token);

      //     })
      //   }
      //   else{
      //     localStorage.removeItem('car-access-token');
      //   }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    setDisplayNamePhotoUrl
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
