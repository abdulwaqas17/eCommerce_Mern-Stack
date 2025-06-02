import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './pages/Register&Login/Signup'
import ProtectedRoutes from './components/ProtectedRoute'
import Page404 from './pages/Page404'
import AdminDashboard from './pages/Dashboards/AdminDashboard'
import EmployeeDashboard from './pages/Dashboards/EmployeeDashboard'
import UserDashboard from './pages/Dashboards/UserDashboard'
import Login from './pages/Register&Login/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Carts from './pages/Carts'
import EmployeeRegistrationForm from './pages/Register&Login/EmployeeRegister'
import EmployeeLogin from './pages/Register&Login/EmployeeLogin'
import AdminLogin from './pages/Register&Login/AdminLogin'
import DashboardHome from './components/dashboardUtils/SidePages/HomeSide'
import OrdersSide from './components/dashboardUtils/SidePages/OrdersSide'
import ProductsSide from './components/dashboardUtils/SidePages/ProductsSide'
import AddProductSide from './components/dashboardUtils/SidePages/AddProductSide'
import DataProvider from './providers/DataProvider'
import ViewProduct from './pages/viewProduct'
import Collection from './pages/Collection'
import FAQs from './pages/FAQs'
import Wishlist from './pages/Wishlist'
import { ToastContainer } from "react-toastify";
import VerifyOtp from './pages/ForgotPass/VerifyOtp'
import ResetPassword from './pages/ForgotPass/ResetPassword'
import ForgotPassword from './pages/ForgotPass/ForgotPassword'
import PlaceOrder from './pages/PlaceOrder'
import OrderSuccess from './pages/OrderSuccess'

// import { userData } from './context/context'

function App() {
  const [user, setUsers] = useState(null);


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

    <DataProvider>
    <BrowserRouter>


        <Routes>
          

          {/* Register and Login pages  */}
          <Route path='/signup' element={<RegistrationForm />} />

          <Route path='/login' element={<Login />} />

          <Route path='/employee/register' element={<EmployeeRegistrationForm />} />

          <Route path='/employee/login' element={<EmployeeLogin />} />

          <Route path='/admin/login' element={<AdminLogin />} />


           {/* Home Page E commerce  */}
          <Route path='/' element={<Home />} />

          

          <Route path='/collections' element={
          
              <Collection />
            
          } />


          <Route path='/products' element={
          
              <Products />
            
          } />

          <Route path='/product/:id' element={
          
              <ViewProduct/>
            
          } />

          <Route path='/about' element={
           
              <About />
            
          } />

          <Route path='/contact' element={
        
              <Contact />
            
          } />

          
          <Route path='/faqs' element={
          
              <FAQs />
            
          } />
          
          <Route path='/wishlist' element={
          
              <Wishlist/>
            
          } />

          <Route path='/forgot-password' element={
         
              <ForgotPassword />
            
          } />

          <Route path='/verify-otp' element={
          
              <VerifyOtp />
          
          } />

          <Route path='/reset-password' element={
       
              <ResetPassword />
         
          } />
          
          {/* Protected Routes  */}


          <Route path='/place-order' element={
            
              <PlaceOrder />
    
          } />


          <Route path='/order-success' element={
            <ProtectedRoutes  tokenName='userToken' redirect='/login'>
              <OrderSuccess />
            </ProtectedRoutes>
          } />


          <Route path='/carts' element={
          
              <Carts />
           
          } />

          <Route path='/profile' element={
            <ProtectedRoutes tokenName='userToken' redirect='/login'>
              <Profile />
            </ProtectedRoutes>
          } />

          <Route path='/carts' element={
            <ProtectedRoutes tokenName='userToken' redirect='/login'>
              <Carts />
            </ProtectedRoutes>
          } />


          {/* Dashboards  */}
           {/* Route Open  of /admindashboard*/}
          <Route path='/admindashboard' element={
            <ProtectedRoutes tokenName='adminToken' redirect='/admin/login'>
              <AdminDashboard />
            </ProtectedRoutes>
           } > 

          <Route path="" element={
            <ProtectedRoutes tokenName='adminToken' redirect='/admin/login'>
              <DashboardHome/>
            </ProtectedRoutes>
          } />

          <Route path='products' element={
            <ProtectedRoutes tokenName='adminToken' redirect='/admin/login'>
              <ProductsSide/>
            </ProtectedRoutes>
          } />

          <Route path='orders' element={
            <ProtectedRoutes tokenName='adminToken' redirect='/admin/login'>
              <OrdersSide/>
            </ProtectedRoutes>
          } />

          <Route path='add-product' element={
            <ProtectedRoutes tokenName='adminToken' redirect='/admin/login'>
              <AddProductSide/>
            </ProtectedRoutes>
          } />

          </Route>
           {/* Route Close  of /admindashboard*/}











          <Route path='/employeedashboard' element={
            <ProtectedRoutes tokenName='employeeToken' redirect='/employee/login'>
              <EmployeeDashboard />
            </ProtectedRoutes>
          } />

          <Route path='/userdashboard' element={
            <ProtectedRoutes tokenName='userToken' redirect='/login'>
              <UserDashboard />
            </ProtectedRoutes>
          } />

           {/* 404 Page  */}
          <Route path='*' element={<Page404 />} />

        </Routes>

        <ToastContainer />


      </BrowserRouter>
      </DataProvider>

  )
}

export default App
