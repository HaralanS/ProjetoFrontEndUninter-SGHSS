import { Navigate, Outlet } from "react-router-dom"

export function PrivateRouteUser() {
  const dadosUsuario = localStorage.getItem("@vidaplus/dadosUsuario")

  console.log("PrivateRouteUser dadosUsuario:");
  console.log(dadosUsuario);

  if (dadosUsuario && JSON.parse(dadosUsuario).role === "paciente") {
    return <Outlet />
  }

  return <Navigate to="/"/>
}