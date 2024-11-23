import React from 'react'
import TaskCount from '../components/TaskCount'
import Header from '../components/Header'
import TaskList from '../components/TaskList'

function EmployeeDashboard({data}) {
    // console.log(data)
    return (
        
        <div className='p-10 h-screen'>
            <Header data={data}/>
            <TaskCount data={data}/>
            <TaskList data={data}/>
        </div>

    )
}

export default EmployeeDashboard