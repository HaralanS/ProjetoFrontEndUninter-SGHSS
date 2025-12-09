import { usuarios } from "../../data/usuarios.js";
import styles from "../HomeUser/HomeUser.module.css"

// pagina inicial do paciente
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
            <h1>Ola, {user && user.nome}</h1>
            <p className={styles.paragraph}>
                Este é o seu espaço pessoal dentro do sistema. Aqui você pode acompanhar suas consultas, visualizar histórico médico, checar dados pessoais e manter suas informações sempre atualizadas.

                O VidaPlus foi criado para facilitar sua experiência e aproximar você dos serviços de saúde.
                Fique à vontade para explorar sua área, acompanhar seus agendamentos e consultar detalhes importantes sobre seu atendimento.

                Cuidar da saúde fica mais simples quando tudo está ao seu alcance.
            </p>
        </div>
    );
}