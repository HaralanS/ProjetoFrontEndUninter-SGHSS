import Header from "../../components/Header/Header"
import NavBarEmployee from "../../components/NavBarEmployee/NavBarEmployee";
import { Outlet } from "react-router-dom"

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