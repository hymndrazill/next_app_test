"use client"
import {signIn, useSession} from "next-auth/react"
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import { formSchema } from "@/schemas";
const LoginForm = () => {
  
  
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const session = useSession()
    const router = useRouter();
    const {values,errors,touched,handleBlur,handleChange} = useFormik({
      initialValues: {
        email:'',
        password:''
      },
      validationSchema:formSchema,
      
    })
    if (session.status ==="authenticated"){
      router?.push("/dashboard")
    }
    if (session.status ==="loading" || session.status ==="unauthenticated"){
      router?.push("/")
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
     signIn("credentials",{email,password})
    }
    
  return (
    <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
        <label >email</label>
        <input type="text" value={values.email}
        onBlur={handleBlur}
        id="email"
        onChange={handleChange} placeholder="email" 
        className={errors.email && touched.email? "input-error" : ""}
        />
         {errors.email && touched.email && <p className="error-message">{errors.email}</p>}
        <label >Password</label>
        <input type="password"
        className={errors.password  && touched.password? "input-error" : ""}
        id="password"
        value={values.password} 
        onBlur={handleBlur}
        onChange={handleChange} placeholder="Password" 
        />
        {errors.password && touched.password && <p className="error-message">{errors.password}</p>}
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