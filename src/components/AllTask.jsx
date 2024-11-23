import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {

    const { userData } = useContext(AuthContext)
    // console.log(userData.employeeData)
   

    return (
        <div id="alltask" className="p-5 flex flex-col gap-5 w-full bg-[#1c1c1c] mt-7 rounded  ">
            <table className="table-auto w-full text-white border-collapse border border-white">
                <thead className="bg-gray-800 sticky top-0">
                    <tr>
                        <th className="px-4 py-2 border-b border-white text-center">Employee's Name</th>
                        <th className="px-4 py-2 border-b border-white text-center">New Task</th>
                        <th className="px-4 py-2 border-b border-white text-center">Active Task</th>
                        <th className="px-4 py-2 border-b border-white text-center">Completed Task</th>
                        <th className="px-4 py-2 border-b border-white text-center">Failed Task</th>
                        <th className="px-4 py-2 border-b border-white text-center">Task Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.employeeData.map((data, index) => (
                            <tr key={index} className="odd:bg-gray-700 even:bg-gray-600">
                                <td className="px-4 py-2 text-center border-b border-white">{data.name}</td>
                                <td className="px-4 py-2 text-center border-b border-white">{data.taskCount.new}</td>
                                <td className="px-4 py-2 text-center border-b border-white">{data.taskCount.active}</td>
                                <td className="px-4 py-2 text-center border-b border-white">{data.taskCount.completed}</td>
                                <td className="px-4 py-2 text-center border-b border-white">{data.taskCount.failed}</td>
                                <td className="px-4 py-2 text-left/*  */ border-b border-white">
                                    {
                                        data.tasks.map((task, i) => {
                                            return <li key={i}>{task.description}</li>
                                        })
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>


    )
}

export default AllTask