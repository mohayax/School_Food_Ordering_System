import logo from '../assets/bu-lg.png'
import { Link, useNavigate } from 'react-router-dom'

const VendorHeader = () => {
  return (
    <div className='w-[100%] bg-slate-100 shadow-md h-20 fixed'>
    <div className='flex justify-between items-center w-[95%] mr-auto ml-auto py-2'>
        <div className='flex justify-between items-center  gap-4'>
          <div className="rounded-full h-16 border-2 border-gray-400">
            <img src={logo} className="h-full rounded-full"/>
          </div>
          <Link to='/vendor-view' className='text-xl text-gray-700 font-base font-semibold'>Vendor View</Link>
        </div>

      
        <div className='border-2 border-gray-400  w-auto px-4 py-1'>
            <h1 className='text-lg text-gray-700 font-base font-semibold'>Hello, Vendor</h1>
        </div>
        

    </div>
  </div>
  )
}

export default VendorHeader