// import { useState } from 'react'
import { Button } from '@mui/material';
import styles from './CardConsulta.module.css';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function CardConsulta({consulta, profissional, setModalOn, modalOn}) {

    const dataAt = new Date(consulta.data);
    // const [modalOn, setModalOn] = useState(false)
    function openStreamModal() {
        // alert('Abrindo modal de consulta remota...');
        setModalOn(!modalOn);
    }
    return (
        <div className={styles.cardConsulta}>
            <AssignmentIcon fontSize="large" />
            <p>Consulta ID: {consulta.id}</p>
            <p>Medico: {profissional.nome}</p>
            <p>Especialidade: {profissional.especialidade}</p>
            <p>Data: {dataAt.toLocaleDateString()}</p>   
            <p>Hora: {dataAt.toLocaleTimeString()}</p>
            <p>Tipo: {consulta.tipo}</p>
            <p>Status: {consulta.status}</p>
            {(consulta.status === 'agendada' && consulta.tipo === 'Telemedicina') && (
                <Button onClick={openStreamModal} variant="contained">Consulta Remota</Button>
            )}
        </div>
    )
}