import Formfield from "@/utils/reusable-components/Formfield"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Login_Schema } from "@/utils/form-schema"
import { Form, FormControl } from "@/components/ui/form"
import { login, logOut } from "@/store/loginSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const {isLoading, isAuthenticated} = useSelector((state) => state.auth)
    const form = useForm({
        resolver: zodResolver(Login_Schema)
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (values) => {
        dispatch(login(values))
        form.reset()
        if (isAuthenticated){
            navigate('/customerView')
        }
    }
  return (
    <div className="flex flex-col items-center gap-2">

        <h1>Login</h1> 
        <Button 
        onClick={()=> {
        dispatch(logOut())
        toast.success("user logged out")
        }}>Logout</Button>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <>
                <Formfield
                    control={form.control}
                    type="email"
                    name="email"

                />

                <Formfield
                    control={form.control}
                    type="password"
                    name="password"
                />
                <Button type="submit" disabled={isLoading}>Login</Button>
                
                </>
            </form>
        </Form>
        
    </div>

  )
}

export default Login