import * as yup from "yup"

export const formSchema = yup.object().shape({
    email: yup.string().email("Please provide a valid email").required("Required"),
    password: yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter').required("Required")
})
