import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription  } from "@/components/ui/form";

const Formfield = ({name, control, label, type, description,placeholder }) => {
  return (
    
     <FormField 
      control={control} 
      name={name}
      render={({field}) => (
        <FormItem >
          <FormLabel >{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field}/>
          </FormControl>
          <FormMessage/>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
  />
  )
}

export default Formfield