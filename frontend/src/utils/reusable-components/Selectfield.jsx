import React from 'react'
import { Controller } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { FormControl,FormItem, FormLabel, FormMessage, FormDescription  } from "@/components/ui/form";


const Selectfield = ({name, control, label,description,placeholder, options}) => {
  return (
    <Controller
    control={control}
    name={name}
    render={({ field }) => (
        <FormItem>
        <FormLabel className='text-[#ADADAD]'>{label}</FormLabel>
        <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) =>{
                    <SelectItem value={option.value}>{option.label}</SelectItem>
                })}
            </SelectContent>
            </Select>
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
        </FormItem>
    )}
    />
  )
}

export default Selectfield