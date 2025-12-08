import Header from "../../components/Header/Header"
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <>
      <Header>
        <NavBarAdmin />
      </Header>
      <Outlet />
    </>
  );
}