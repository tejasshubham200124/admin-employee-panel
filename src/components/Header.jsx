import React, { useState } from 'react'
import { clearLocalStorage } from '../utils/localstorage'


function Header({ data }) {

    // const [firstName, setFirstName] = useState('')
    
    // if (!data) {
    //     setFirstName("Admin")
    // } else {
    //     setFirstName(data.name)
    // }

    return (
        <div className='flex  items-center justify-between'>
            <span className='text-white text-xl'>
                hello<br /> admin✌️
            </span>
            <button className='rounded text-white font-semibold px-5 py-2 bg-red-400' onClick={clearLocalStorage}>Log out</button>

        </div>
    )
}

export default Header