import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employeeData, adminData } = getLocalStorage();
    if (employeeData && adminData) {
        setUserData({ employeeData, adminData }); 
    }
}, []);

  

  return (
    <div>
      <AuthContext.Provider value={{userData,setUserData}}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider