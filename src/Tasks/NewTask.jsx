import React from 'react'

function NewTask({data}) {
  return (
    <div className=' flex-shrink-0 h-full w-[320px] bg-rose-700  rounded-xl p-5'>
            <div className='flex justify-between items-center text-white'>
                <h3 className='bg-red-600 px-3 rounded-full py-1'>High</h3>
                <h4 className='font-semibold text-medium'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold text-white'>{data.description}</h2>
            <p className='text-white mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus accusamus ducimus rerum, eum ex neque nisi repellendus, officia minus veniam iusto at debitis iure rem culpa asperiores nihil voluptate! Nulla.</p>
            <div className='flex justify-between mt-4'>
                <button className='px-3 py-4 bg-green-600  text-sm border-none rounded text-white font-semibold'>Mark as acitve</button>
                
            </div>
        </div>
  )
}

export default NewTask