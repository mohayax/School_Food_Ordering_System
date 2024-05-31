import * as z from "zod"


export const Signup_Schema = z.object({
    email: z.string().email(),
    role: z.string({required_error: "role is required"}),
    password: z.string().min(6, {message: "password must be atleast 6 characters"}),
    password2: z.string().min(6, {message: "password must be atleast 6 characters"})
})

export const Login_Schema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: "password must be atleast 6 characters"})
})

export const ForgotPassword_Schema = z.object({
    email: z.string().email(),
})

export const ResetPassword_Schema = z.object({
    new_password: z.string().min(6, {message: "password must be atleast 6 characters"}),
    confirm_password: z.string().min(6, {message: "password must be atleast 6 characters"}),
    token: z.string({required_error: "enter the token sent to your email"})
})