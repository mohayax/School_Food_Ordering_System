import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Formfield from "@/utils/reusable-components/Formfield";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "@/store/auth/resetSlice";
import { Form } from "@/components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { ResetPassword_Schema } from "@/utils/form-schema";
import { useNavigate } from "react-router-dom";




const ResetPassword = () => {
    const {isLoading, error, reset} = useSelector((state) => state.resetPassword)
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(ResetPassword_Schema)
    })

    const dispatch = useDispatch()
    const onSubmit = (values) => {
       dispatch(resetPassword(values))
       if (!isLoading && reset && !error){
            navigate('/login')
       }
    }

  return (
    <div className="flex flex-col items-center gap-2">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Formfield
                    control = {form.control}
                    name="new_password"
                    type="password"
                    label="New Password"
                    
                />
                 <Formfield
                    control = {form.control}
                    name="confirm_password"
                    type="password"
                    label = "Confrim Password"
                />
                 <Formfield
                    control = {form.control}
                    name="token"
                    type="text"
                    required='required'
                    label="Reset Token"
                />
                <Button type="submit">Reset</Button>
            </form>
        </Form>
    </div>
  )
}

export default ResetPassword