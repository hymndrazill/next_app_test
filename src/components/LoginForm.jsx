"use client"
import { useState } from "react";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter()
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!username || !password) {
        alert('Please fill out all fields');
        return;
      } 
      else {
      await signIn("credentials",{username,password})
      console.log("clicked")
      router.push('/dashboard')
      }
    };
  return (
    <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
        <label >Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <label >Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <label>
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            Remember Me
        </label>
        <button className="btn"type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm