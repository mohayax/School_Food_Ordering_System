import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { Signup_Schema } from "../utils/form-schema"
import { zodResolver } from '@hookform/resolvers/zod';

const Signup = () => {
  const {register, handleSubmit} = useForm({
    resolver: zodResolver(Signup_Schema)
  })

  const notify = () => toast.success('success')
  return (
    <div className="flex flex-col items-center gap-2 border-red-500">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(notify)} className="flex flex-col p-7">
        <input className={"bg-transparent border-red-500 rounded-sm mb-4"}  {...register("email", {required: true}) }/>
        <input type="text" {...register("password")}/>
        <input type="submit"/>
      </form>
    </div>
    
  )
}

export default Signup