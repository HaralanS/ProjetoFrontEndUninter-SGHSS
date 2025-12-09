import Header from "../../components/Header/Header"
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import { Outlet } from "react-router-dom"

// layput personalizado para admin
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