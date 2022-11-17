import React from 'react'
import { useEffect, useState } from 'react'
import {auth} from '../pages/firebase'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'


export default function Login() {
    const [user, setuser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
    }
    
  useEffect(()=> {
    console.log(user);
  }, [user])

  return (
    <div className="">
        
        <button className='bg-green-300 rounded-md p-2' onClick={login}>LOGIN</button>
        {user? "Welcome ," + user.displayName : "Please Login"}
        <button onClick={()=> auth.signOut()}>LOGOUT</button>
    </div>
  )
}
