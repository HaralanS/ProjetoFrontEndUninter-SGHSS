import { usuarios } from "../../data/usuarios.js";
import styles from "../HomeUser/HomeUser.module.css"

export default function HomeUser() {
    console.log("Lista")
    console.log(usuarios)
    const userLS = localStorage.getItem("@vidaplus/dadosUsuario")
    const userID = JSON.parse(userLS).id;
    const user = usuarios.find((u) => u.id === userID);
    console.log("User dadosUsuario:");
    console.log(user);
    return (
        <div className={styles.userContainer}>
            <h1>User Page</h1>
            <p>Ola, {user && user.nome}</p>
        </div>
    );
}