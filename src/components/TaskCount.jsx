import React from 'react'

function TaskCount({data}) {
    return (
        <div className='flex  mt-10 justify-between gap-5'>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskCount.new}</h2>
            <h2 className='text-2xl mb-2 text-white'>New Task</h2>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskCount.active}</h2>
            <h2 className='text-2xl mb-2 text-white'>Active Task</h2>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskCount.completed}</h2>
            <h2 className='text-2xl mb-2 text-white'>Completed</h2>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-orange-400'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskCount.failed}</h2>
            <h2 className='text-2xl mb-2 text-white'>Failed Task</h2>
        </div>
    </div>
    
    )
}

export default TaskCount