import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Formfield from "@/utils/reusable-components/Formfield";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/store/auth/forgotSlice";
import { Form } from "@/components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassword_Schema } from "@/utils/form-schema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




const ForgotPassword = () => {
    const {isLoading, error, account} = useSelector((state) => state.forgotPassword)
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(ForgotPassword_Schema)
    })

    const dispatch = useDispatch()
    const onSubmit = (values) => {
       dispatch(forgotPassword(values))
    }

    useEffect(()=> {
    if (!isLoading && account){
        navigate('/reset-password')
        }
    }, [isLoading, account])

  return (
    <div className="flex flex-col items-center gap-2">
        <h1>Forgot Password</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Formfield
                control = {form.control}
                name ="email"
                type ="email"
                placeholder="johndoe@email.com"
                />
                <Button type='submit' disabled={isLoading}>{isLoading ? "loading...":"Submit"}</Button>
            </form>
        </Form>
    </div>
  )
}

export default ForgotPassword