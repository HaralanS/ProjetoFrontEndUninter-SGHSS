import { usuarios } from "../../data/usuarios.js";
import styles from "../EmployeeHome/EmployeeHome.module.css"

export default function EmployeeHome() {
    console.log("Lista")
    console.log(usuarios)
    const userLS = localStorage.getItem("@vidaplus/dadosUsuario")
    const userID = JSON.parse(userLS).id;
    const user = usuarios.find((u) => u.id === userID);
    console.log("User dadosUsuario:");
    console.log(user);
    return (
        <main className={styles.employeeContainer}>
            <h1>Employee Page</h1>
            <p>Ola, Dr. {user && user.nome}</p>
        </main>
    );
}