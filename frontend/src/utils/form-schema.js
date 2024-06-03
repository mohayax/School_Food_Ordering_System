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

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const Vendor_Profile_Schema = z.object({
    email: z.string().email(),
    vendor_name: z.string(),
    // vendor_logo: z.any()
    // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    // .refine(
    //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // ),
    vendor_address: z.string(),
    vendor_contact_number: z.string(),
    vendor_description: z.string()
})