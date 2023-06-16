"use client"
import {  signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter();

  if (status === "loading") {
    
  return "Loading or not authenticated..."
  }
  if (status === "unauthenticated") {
    
  router.push('/')

  }

    if (status === "authenticated") {
    console.log(session)
  return <>
  <h1>Dashboard</h1>
    <p>Youll only see this if youre authenticated</p>
    <p>Signed in as {session.user.email}</p>
    <button onClick={signOut}>LogOut</button>
  </>

  } 
}

export default Dashboard