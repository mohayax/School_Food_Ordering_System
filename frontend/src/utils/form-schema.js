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
    email: z.string().email()
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


export const Customer_Profile_Schema = z.object({
    email: z.string().email(),
    first_name: z.string({required_error: "first name is required"}),
    last_name: z.string({required_error: "last name is required"}),
    customer_dob: z.string().date(),
    phone_number: z.string(),
    // profile_photo: z.any()
    // .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    // .refine(
    //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // )
})



export const Menu_Item_Schema = z.object({
    item_name: z.string({ required_error: "Item name is required"}),
    // item_photo: '',
    item_price: z.string(),
    item_category: z.string({ message: "Options must be one of Food, Drinks, Snacks", required_error: "Select Item Category"}),
    availability_status:  z.string({ message: "Options must be one of Available, Unavailable", required_error: "Select Item Category"}),
    item_description: z.string().min(15, {message: 'Description must be at least 15 characters long'}).max(75, { message: 'Description must be at most 75 characters long' }),
})

const orderItemSchema = z.object({
    item_name: z.string()
  });

  export const orderSchema = z.object({
    id: z.string(),
    customer_name: z.string(),
    order_items: z.string(),
    order_date: z.string(),
    order_status: z.string(),
    total_amount: z.string()
  });