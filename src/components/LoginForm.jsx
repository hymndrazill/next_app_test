"use client"
import { useState } from "react";
import {signIn, useSession} from "next-auth/react"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
  })





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
        <input type="text" value={formik.values.email} onChange={formik.handleChange} placeholder="email" />
        <label >Password</label>
        <input type="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Password" />
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