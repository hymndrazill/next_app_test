'use client'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
    const session = useSession()
  if (session.status === 'authenticated') {
    return (
      <>
          Signed in as {session.user.username} <br />
        <button onClick={() => signOut()}>Sign out</button>
        
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Dashboard