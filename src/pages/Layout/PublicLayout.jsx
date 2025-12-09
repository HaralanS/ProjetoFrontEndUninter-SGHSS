import Header from "../../components/Header/Header"
import NavBarHome from "../../components/NavBarHome/NavBarHome"
import { Outlet } from "react-router-dom"

// layout personalizado para publico
export default function PublicLayout() {
  return (
    <>
      <Header>
        <NavBarHome />
      </Header>
      <Outlet />
    </>
  );
}