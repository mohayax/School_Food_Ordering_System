import React from 'react'

const DashbordCard = ({title, data, borderColor}) => {
  return (
    <div className={`flex flex-col p-4 gap-3  items-center bg-slate-50 shadow-md h-20 w-44 border-l-[4px] border-${borderColor}-400`}>
            <h2 className='text-sm font-base font-semibold text-gray-700'>{title}</h2>
            <p className='text-sm font-base font-semibold text-gray-600'>{data}</p>
    </div>
  )
}

export default DashbordCard