import React from 'react'
import Header from '../components/Header'
import CreateTask from '../components/CreateTask'
import AllTask from '../components/AllTask'

function AdminPanel({data}) {
    return (
        <div className=' h-screen w-full p-10'>
            <Header data={data} />
            <CreateTask data={data} />
            <AllTask data={data}/>
        </div>
    )
}

export default AdminPanel