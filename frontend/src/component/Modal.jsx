import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Modal = ({title,description,label,value,onChange, btnText, onClick}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className='border-2 border-gray-600 p-2 text-xs font-base font-semibold hover:bg-gray-300'>Add to Cart</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
           {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {label}
            </Label>
            <Input id="name" type="number" value={value} onChange={onChange} className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={onClick}>{btnText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal