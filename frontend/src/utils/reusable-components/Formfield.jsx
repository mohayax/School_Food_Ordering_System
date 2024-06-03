import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription  } from "@/components/ui/form";

const Formfield = ({name, control, label, type, description,placeholder, required, value }) => {
  return (
    
     <FormField 
      control={control} 
      name={name}
      render={({field}) => (
        <FormItem >
          <FormLabel >{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} required={required} value={value}/>
          </FormControl>
          <FormMessage/>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
  />
  )
}

export default Formfield