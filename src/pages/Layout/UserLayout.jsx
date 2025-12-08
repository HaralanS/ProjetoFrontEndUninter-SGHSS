import Header from "../../components/Header/Header"
import NavBarUser from "../../components/NavBarUser/NavBarUser"
import { Outlet } from "react-router-dom"

export default function UserLayout() {
  return (
    <>
      <Header>
        <NavBarUser />
      </Header>
      <Outlet />
    </>
  );
}