import { Navigate, Outlet } from "react-router-dom"

export function PrivateRouteEmployee() {
  const dadosUsuario = localStorage.getItem("@vidaplus/dadosUsuario")

  console.log("PrivateRouteEmployee dadosUsuario:");
  console.log(dadosUsuario);

  if (dadosUsuario && JSON.parse(dadosUsuario).role === "profissional") {
    return <Outlet />
  }

  return <Navigate to="/"/>
}