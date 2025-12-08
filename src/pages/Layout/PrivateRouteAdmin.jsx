import { Navigate, Outlet } from "react-router-dom"

export function PrivateRouteAdmin() {
  const dadosUsuario = localStorage.getItem("@vidaplus/dadosUsuario")

  console.log("PrivateRouteAdmin dadosUsuario:");
  console.log(dadosUsuario);

  if (dadosUsuario && JSON.parse(dadosUsuario).role === "admin") {
    return <Outlet />
  }

  return <Navigate to="/"/>
}