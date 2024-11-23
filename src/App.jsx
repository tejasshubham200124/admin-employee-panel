import React, { useContext, useEffect, useState } from 'react'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AdminPanel from './pages/AdminPanel'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedinUser, setLoggedinUser] = useState(null)
  const {userData} = useContext(AuthContext)

  console.log(userData)
  
  useEffect(() => {
    if (userData) {
      const loggedinUser = localStorage.getItem('loggedInUser')
      if (loggedinUser) {
        const userDetails = JSON.parse(loggedinUser)
        setUser(userDetails.role)
        setLoggedinUser(userDetails.data)
      }
    }
  }, [userData])

  const handleLogin = (email, password) => {
    if (userData && userData.adminData.find((e) => email == e.email && e.password == password)) {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin', data: userData.adminData }))
    } else if (userData) {
      const employee = userData.employeeData.find((e) => email == e.email && password == e.password)
      console.log(employee)
      if (employee) {
        setUser('employee')
        setLoggedinUser(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      console.log('invalid credentials')
    }
  }


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminPanel data={loggedinUser} /> : (user === "employee" ? <EmployeeDashboard data={loggedinUser} /> : null)}
    </div>
  )
}

export default App