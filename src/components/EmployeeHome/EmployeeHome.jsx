import { usuarios } from "../../data/usuarios.js";
import styles from "../EmployeeHome/EmployeeHome.module.css"

// pagina home dos profissionais
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
            <h1>Ola, {user && user.nome}</h1>
            <p className={styles.paragraph}>
                Aqui você tem acesso rápido à sua agenda, consultas marcadas, histórico de atendimento e informações essenciais sobre seus pacientes. O sistema foi projetado para oferecer clareza, segurança e velocidade no seu dia a dia clínico.

                Acompanhe horários, gerencie atendimentos e visualize dados importantes com apenas alguns cliques.
                No VidaPlus, você pode focar no que realmente importa: oferecer um atendimento de qualidade e humanizado.
            </p>
        </main>
    );
}