import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'



function CreateTask() {

    const { userData, setUserData } = useContext(AuthContext)

    const [newTask, setNewTask] = useState({
        title: '',
        date: '',
        assignedTo: "",
        category: "",
        description: '',
        new: true,
        active: false,
        failed: false,
        completed: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewTask((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newTask.title || !newTask.assignedTo || !newTask.date || !newTask.category || !newTask.description) return
        const data = JSON.parse(localStorage.getItem("employees"))

        const updatedData = data.map((elem) => {
            if (elem.name === newTask.assignedTo) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask]
                };
            }
            return elem;
        });
        localStorage.setItem('employees', JSON.stringify(updatedData));
        setUserData({ employeeData: updatedData });

        setNewTask({
            title: '',
            date: '',
            assignedTo: "",
            category: "",
            description: '',

        })
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form action="" onSubmit={(e) => handleSubmit(e)} className='flex justify-between w-full flex-wrap items-center'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-4'>Task Title</h3>
                        <input type='text' name="title" value={newTask.title} onChange={handleChange} className='text-sm  text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='please enter task title' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-4'>Date</h3>
                        <input type="date" name="date" value={newTask.date} onChange={handleChange} className='text-sm py-1   text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] placeholder-gray-500 border-gray-400 mb-4' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-4'>Assign to</h3>
                        <input type='text' name="assignedTo" value={newTask.assignedTo} onChange={handleChange} className='text-sm  text-white py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='please enter employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-4'>Category</h3>
                        <input type='text' name="category" value={newTask.category} onChange={handleChange} className='text-sm py-1 px-2  text-white w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='eg dev,design etc' />
                    </div>
                </div>
                <div className='w-2/5 flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-4' >Description</h3>
                    <textarea cols="30" rows='10' name="description" value={newTask.description} onChange={handleChange} className='w-full h-44 text-sm rounded  text-white border-[1px] outline-none bg-transparent'></textarea>
                    <button type='submit' className='w-full h-10 bg-emerald-600 justify-center text-white font-semibold rounded mt-10'>create task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask