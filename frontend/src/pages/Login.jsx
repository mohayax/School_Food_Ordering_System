import Formfield from "@/utils/reusable-components/Formfield"
import loginPic from "../assets/login.png"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Login_Schema } from "@/utils/form-schema"
import { Form, FormControl } from "@/components/ui/form"
import { login, logOut } from "@/store/auth/loginSlice"
import { useDispatch, useSelector} from "react-redux"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { getUser } from "@/store/auth/loginSlice"


const Login = () => {
    const {isLoading, isAuthenticated, error, user} = useSelector((state) => state.auth)
    const form = useForm({
        resolver: zodResolver(Login_Schema)
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (values) => {
        dispatch(login(values))
    }
    
    const handleLogout = async () =>{
        dispatch(logOut())
        toast.success("user logged out")
        navigate('/')
    }

    useEffect(() => {
        if (isLoading === false && isAuthenticated && error === false){
            dispatch(getUser())
            if (user.role === 'customer'){
                navigate('/customer-view')
            }
            else if (user.role === 'vendor'){
                navigate('/vendor-view')
            }
        }
       
    }, [isLoading, isAuthenticated, user])
  return (
    <div className="flex">

       
        {/* <Button 
        onClick={handleLogout}>Logout</Button> */}

        <div className="w-[50%] bg-login bg-cover h-screen">
        {/* <img src={sigUpPic} className="w-[100%]"/> */}
        </div>
       
        <div className="w-[50%] bg-slate-100">
        <div className="flex flex-col w-[50%] ml-auto mr-auto justify-center items-center mt-20 mb-auto px-10 py-10 shadow-lg rounded-lg ">
            <h1 className="text-xl font-bold">Login</h1> 
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    
                        <Formfield
                            control={form.control}
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="johndoe@email.com"
                            
                        />

                        <Formfield
                            control={form.control}
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            className='mt-4'
                        />
                        <Button type="submit" disabled={isLoading} className='w-[100%] mt-4'>Login</Button>
                        
                    </form>
                </Form>
           
            <div className="flex items-center mt-4 gap-4">
            <Link to="/forgot-password" className="text-sm text-blue-900">Forgot password?</Link>
            <Link to="/signup" className="text-sm text-bl-900">Signup</Link>
            </div>
            </div>
            </div>
    </div>

  )
}

export default Login