import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { PrivateRouteAdmin } from "./pages/Layout/PrivateRouteAdmin";
import UserAdmin from "./pages/UserAdmin";
import User from "./pages/User";
import { PrivateRouteUser } from "./pages/Layout/PrivateRouteUser";
import { PrivateRouteEmployee } from "./pages/Layout/PrivateRouteEmployee";
import Employee from "./pages/Employee";
import PublicLayout from "./pages/Layout/PublicLayout";
import SignIn from "./pages/SignIn";
import UserLayout from "./pages/Layout/UserLayout";
import Consultas from "./pages/Consultas";
import EmployeeLayout from "./pages/Layout/EmployeeLayout";
import Agendas from "./pages/Agendas";
import Footer from "./components/Footer/Footer";
import AdminLayout from "./pages/Layout/AdminLayout";
import Dashboard from "./pages/Dashboard";

function App() {

    // gerenciamento de rotas usando react router dom
  return (
    <BrowserRouter>
        <Routes>

            {/* dividi as rotas em publicas, privadas pra user, 
            privadas pra funcionario e privadas pra admin */}
            
            <Route element={<PublicLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Home />} />
                <Route path='/*' element ={<NotFound/>}/>
            </Route>

            <Route element={<AdminLayout />}>
                <Route path="/" element={<PrivateRouteAdmin />}>
                    <Route path="admin" element={<UserAdmin />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    
                </Route>
            </Route>

            <Route element={<UserLayout />}> 
                <Route path="/" element={<PrivateRouteUser />}>
                    <Route path="user" element={<User />} />
                    <Route path="consultas" element={<Consultas />} />
                    
                </Route>
            </Route>

            <Route element={<EmployeeLayout />}>
                <Route path="/" element={<PrivateRouteEmployee />}>
                    <Route path="employee" element={<Employee />} />
                    <Route path="agendas" element={<Agendas />} />
                </Route>
                
            </Route>

        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
