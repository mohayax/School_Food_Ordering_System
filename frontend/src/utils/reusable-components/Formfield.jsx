import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription  } from "@/components/ui/form";

const Formfield = ({name, control, label, type, description,placeholder, required, className,  value, disabled, onChange}) => {
  return (
     <FormField 
      required={required}
      control={control} 
      name={name}
      render={({field}) => (
        <FormItem className={className}>
          <FormLabel >{label}</FormLabel>
          <FormControl>
            {type === 'file' ?
             (<Input value={value} type={type} placeholder={placeholder} {...field}  disabled={disabled} onChange={onChange}/>) : 
             (<Input value={value} type={type} placeholder={placeholder} {...field}  disabled={disabled} />)
            }
          </FormControl>
          <FormMessage/>
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
  />
  )
}

export default Formfield