// import { useState } from 'react'
import { Button } from '@mui/material';
import styles from './CardConsulta.module.css';
import AssignmentIcon from '@mui/icons-material/Assignment';

// Card com as informacoes da consulta
export default function CardConsulta({consulta, profissional, setModalOn, modalOn}) {

    const dataAt = new Date(consulta.data);
    function openStreamModal() {
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
            {/* Botao que seta se o modal está aberto ou fechado, o modal simula um stream de consulta online */}
            {(consulta.status === 'agendada' && consulta.tipo === 'Telemedicina') && (
                <Button onClick={openStreamModal} variant="contained">Consulta Remota</Button>
            )}
        </div>
    )
}