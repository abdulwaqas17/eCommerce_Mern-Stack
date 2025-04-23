import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './pages/Signup'
import ProtectedRoutes from './components/ProtectedRoute'
import Page404 from './pages/Page404'
import AdminDashboard from './pages/Dashboards/AdminDashboard'
import EmployeeDashboard from './pages/Dashboards/EmployeeDashboard'
import UserDashboard from './pages/Dashboards/UserDashboard'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Carts from './pages/Carts'
import EmployeeRegistrationForm from './pages/Register&Login/EmployeeRegister'
import EmployeeLogin from './pages/Register&Login/EmployeeLogin'
import AdminLogin from './pages/Register&Login/AdminLogin'
// import { userData } from './context/context'

function App() {
  const [user, setUsers] = useState(null);

  // useEffect(() => {

  //   let token = window.localStorage.getItem('token');

  //   if (token) {

  //     let currentUserData = async () => {

  //       const res = await fetch('http://localhost:3000/user', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}` // 👉 yahan se verifyToken middleware chalega
  //         }
  //       });

  //       let data = res.json();

  //       setUsers(data);

  //     }

  //     currentUserData()
  //   }

  // }, [])

  return (

    // <userData.provider  value={user}>

    //   <BrowserRouter>


    //     <Routes>

    //       <Route path='/signup' element={<RegistrationForm />} />

    //       <Route path='/login' element={<Login />} />

    //       <Route path='/' element={<Home />} />

    //       <Route path='/carts' element={
    //         <ProtectedRoutes>
    //           <Carts />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/products' element={
    //         <ProtectedRoutes>
    //           <Products />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/about' element={
    //         <ProtectedRoutes>
    //           <About />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/contact' element={
    //         <ProtectedRoutes>
    //           <Contact />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/profile' element={
    //         <ProtectedRoutes>
    //           <Profile />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/carts' element={
    //         <ProtectedRoutes>
    //           <Carts />
    //         </ProtectedRoutes>
    //       } />


    //       {/* Dashboards  */}

    //       <Route path='/admindashboard' element={
    //         <ProtectedRoutes>
    //           <AdminDashboard />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/employeedashboard' element={
    //         <ProtectedRoutes>
    //           <EmployeeDashboard />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='/userdashboard' element={
    //         <ProtectedRoutes>
    //           <UserDashboard />
    //         </ProtectedRoutes>
    //       } />

    //       <Route path='*' element={<Page404 />} />

    //     </Routes>


    //   </BrowserRouter>


    // </userData.provider>

    <BrowserRouter>


        <Routes>
          

          {/* Register and Login pages  */}
          <Route path='/signup' element={<RegistrationForm />} />

          <Route path='/login' element={<Login />} />

          <Route path='/employee/register' element={<EmployeeRegistrationForm />} />

          <Route path='/employee/Login' element={<EmployeeLogin />} />

          <Route path='/admin/Login' element={<AdminLogin />} />


           {/* Home Page E commerce  */}
          <Route path='/' element={<Home />} />

          {/* Protected Routes  */}
          <Route path='/carts' element={
            <ProtectedRoutes>
              <Carts />
            </ProtectedRoutes>
          } />

          <Route path='/products' element={
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          } />

          <Route path='/about' element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          } />

          <Route path='/contact' element={
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          } />

          <Route path='/profile' element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          } />

          <Route path='/carts' element={
            <ProtectedRoutes>
              <Carts />
            </ProtectedRoutes>
          } />


          {/* Dashboards  */}

          <Route path='/admindashboard' element={
            <ProtectedRoutes>
              <AdminDashboard />
            </ProtectedRoutes>
          } />

          <Route path='/employeedashboard' element={
            <ProtectedRoutes>
              <EmployeeDashboard />
            </ProtectedRoutes>
          } />

          <Route path='/userdashboard' element={
            <ProtectedRoutes>
              <UserDashboard />
            </ProtectedRoutes>
          } />

           {/* 404 Page  */}
          <Route path='*' element={<Page404 />} />

        </Routes>


      </BrowserRouter>

  )
}

export default App
