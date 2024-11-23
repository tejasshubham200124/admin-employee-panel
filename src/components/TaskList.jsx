import React from 'react'
import ActiveTask from '../Tasks/ActiveTask'
import NewTask from '../Tasks/NewTask'
import CompletedTask from '../Tasks/CompletedTask'
import FailedTask from '../Tasks/FailedTask'

function TaskList({ data }) {
    return (
        <div id='tasklist' className='h-[60%] overflow-x-auto w-full mt-10  flex items-center flex-nowrap py-5 justify-start gap-5'>
            {
                data.tasks.map((task)=>{
                    if(task.active){
                        return <ActiveTask data={task} />
                    }
                    if(task.new){
                        return <NewTask data={task} />
                    }
                    if(task.completed){
                        return <CompletedTask data={task} />
                    }
                    if(task.failed){
                        return <FailedTask data={task}/>
                    }

                })
            }
           
        </div>
    )
}

export default TaskList