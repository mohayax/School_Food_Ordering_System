import { z } from "zod";


export const Signup_Schema = z.object({
    email: z.email({reqiure_error: "Email is requred"}),
    role: z.enum(["vendor", "customer"]),
    password: z.string.min(6, {reqiure_error: "password must be atleast 6 characters"}),
    password2: z.string.min(6, {reqiure_error: "password must be atleast 6 characters"})
})