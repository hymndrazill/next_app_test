"use client"
import { useState } from "react";
import {signIn, useSession} from "next-auth/react"
import { useRouter } from "next/navigation";
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const session = useSession()
    const router = useRouter();

    if (session.status ==="authenticated"){
      router?.push("/dashboard")
    }
    if (session.status ==="loading" || session.status ==="unauthenticated"){
      router?.push("/")
    }

    


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert('Please fill out all fields');
        return;
      } 
    
     signIn("credentials",{email,password})
     
    //   else {
      
    //   }
    };
  return (
    <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
        <label >email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <label >Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <label>
        <input type="checkbox"  />
          Remember Me
        </label>
        <button className="btn"type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm