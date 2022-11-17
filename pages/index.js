import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {auth} from './firebase'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'

const styles = {
   postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`
}

export default function Home() {
 
  return (
    <>
    <Banner/>
    <div className={styles.postsList}>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
    
    {/* <Login/> */}
    </>
  )
}
