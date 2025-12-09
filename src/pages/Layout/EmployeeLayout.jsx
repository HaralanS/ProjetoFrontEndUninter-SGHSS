import Header from "../../components/Header/Header"
import NavBarEmployee from "../../components/NavBarEmployee/NavBarEmployee";
import { Outlet } from "react-router-dom"

// layout personalizado para funcionario
export default function EmployeeLayout() {
  return (
    <>
      <Header>
        <NavBarEmployee />
      </Header>
      <Outlet />
    </>
  );
}