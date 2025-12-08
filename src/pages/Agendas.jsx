import { useState } from 'react'
import { consultas } from "../data/consultas"
import { usuarios } from "../data/usuarios.js";
// import { profissionais } from "../data/profissionais.js";
import styles from "../components/CardAgenda/CardAgenda.module.css"
import CardAgenda from '../components/CardAgenda/CardAgenda.jsx';

export default function Agendas() {
    const [modalOn, setModalOn] = useState(false) 

    const profissionalLs = localStorage.getItem("@vidaplus/dadosUsuario")
    const userID = JSON.parse(profissionalLs).id;
    // const user = usuarios.find((u) => u.id === userID);

    const consultasProfissional = consultas.filter((consulta) => consulta.profissionalId === userID);
    
    return (
        <div className={styles.divPage}>
            <h1>Agendas</h1>
            <div className={styles.cardContainer}>
                {consultasProfissional.map((consulta) => {
                    const paciente = usuarios.find((u) => u.id === consulta.pacienteId);
                    return (
                        <CardAgenda 
                        key={consulta.id} 
                        className={styles.cardAgenda} 
                        paciente={paciente} 
                        consulta={consulta} 
                        setModalOn={setModalOn} 
                        modalOn={modalOn} />
                    )
                })}
            </div>
        </div>
    )
}