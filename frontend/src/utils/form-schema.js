import { z } from "zod"


export const Signup_Schema = z.object({
    email: z.string().email(),
    role: z.enum(["vendor", "customer"]),
    password: z.string().min(6, {message: "password must be atleast 6 characters"}),
    password2: z.string().min(6, {message: "password must be atleast 6 characters"})
})