import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  signOut as _signOut,
  onAuthStateChanged as _onAuthStateChanged,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "./firebase"; // your firebase client instance

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const formatAuthUser = (user: User): AuthUser => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
  });

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const signInWithEmailAndPassword = (email: string, password: string) =>
    _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ) => {
    const userCredential = await _createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    }
    return userCredential;
  };

  const signOut = () => _signOut(auth).then(clear);

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setAuthUser(formatAuthUser(authState));
    setLoading(false);
  };

  const onAuthStateChanged = (cb: (user: User | null) => void) =>
    _onAuthStateChanged(auth, cb);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
