import { nanoid } from 'nanoid'
import { useState } from 'react'
import { consultas } from "../data/consultas"
import { usuarios } from "../data/usuarios.js";
import { profissionais } from "../data/profissionais.js";
import CardConsulta from "../components/CardConsulta/CardConsulta.jsx";
import styles from "../components/CardConsulta/CardConsulta.module.css"
import Modal from '../components/Modal/Modal.jsx';
import { Button } from '@mui/material';

function buscaProfissional(profissionalId) {
    return profissionais.find((profissional) => profissional.id === profissionalId);
}

export default function Consultas() {

    const timeListObjects = [
        {time: "08:00", available: true},
        {time: "08:30", available: true},
        {time: "09:00", available: true},
        {time: "09:30", available: true},
        {time: "10:00", available: true},
        {time: "10:30", available: true},
        {time: "11:00", available: true},
        {time: "11:30", available: true},
        {time: "12:00", available: true},
        {time: "12:30", available: true},
        {time: "13:00", available: true},
        {time: "13:30", available: true},
        {time: "14:00", available: true},
        {time: "14:30", available: true},
        {time: "15:00", available: true},
        {time: "15:30", available: true},
        {time: "16:00", available: true},
        {time: "16:30", available: true},
        {time: "17:00", available: true},
        {time: "17:30", available: true},
    ]
    const [modalOn, setModalOn] = useState(false) 
    const [timeList, setTimeList] = useState(timeListObjects) 
    const [dateChosen, setDateChosen] = useState(false) 
    const [doctorSelected, setDoctorSelected] = useState(profissionais[0].id)
    const [addMode, setAddMode] = useState(false)
    const [consultasList, setConsultasList] = useState(consultas)

    const userLS = localStorage.getItem("@vidaplus/dadosUsuario")
    const userID = JSON.parse(userLS).id;
    const user = usuarios.find((u) => u.id === userID);

    function checkDate(e) {
        console.log("Data do e: " + e.target.value)

        const doutor = profissionais.find((profissional) => profissional.id === doctorSelected);

        // const agendaDoutor = doutor.agenda.filter((idCConsulta) => {
        //     const consulta = consultas.find((c) => c.id === idCConsulta);
        //     const dataString = consulta.data;
        //     const data = dataString.split("T");
        //     if(data[0] === e.target.value) {
        //         return dataString;
        //     }
        // })
        const agendaDoutor = doutor.agenda.filter((dataString) => {
            const data = dataString.split("T");
            if(data[0] === e.target.value) {
                return dataString;
            }
        })

        // console.log("Agenda do doutor na data escolhida (strings): ")
        // console.log(agendaDoutor);

        const novaAgenda = timeListObjects.map((timeObj) => {
            const timeString = timeObj.time;

            return { 
                time: timeString, 
                available: !agendaDoutor.includes(e.target.value + "T" + timeString + ":00")
            }
        })


        setTimeList(novaAgenda);

        console.log("Agenda do doutor na data escolhida: ")
        console.log(timeList);
        setDateChosen(true);
    }

    function cadastraConsulta() {
        const dateInput = document.getElementById("datePicker").value;
        const timeInput = document.getElementById("selectTime").value;
        const novaConsulta = {
            id: nanoid(),
            pacienteId: user.id,
            profissionalId: doctorSelected,
            data: new Date(dateInput + "T" + timeInput + ":00"),
            tipo: "Presencial",
            status: "agendada",
        };

        if(!dateInput || !timeInput) {
            alert("Por favor, preencha todos os campos antes de cadastrar a consulta.");
            return;
        }

        profissionais.map((profissional) => {
            if(profissional.id === doctorSelected) {
                profissional.agenda.push(dateInput + "T" + timeInput + ":00");
            }
        });

        consultas.push(novaConsulta);

        setConsultasList([...consultasList]);
        setAddMode(false);
    }

    return (
        <div className={styles.divPage}>
            <h1>Consultas Page</h1>
            <Button variant="contained" onClick={() => setAddMode(!addMode)}>{addMode ? 'Cancelar' : 'Agendar Nova Consulta'}</Button>

            {addMode ? (
                <div className={styles.divCadastroConsulta}>
                    <select name="selectDoctor" id="selectDoctor" onChange={(e) => setDoctorSelected(e.target.value)}>
                        {profissionais.map((profissional) => (
                            <option key={profissional.id} value={profissional.id}>{profissional.nome} - {profissional.especialidade}</option>
                        ))}
                    </select>
                    <input type="date" name="datePicker" id="datePicker" min={new Date().toISOString().split("T")[0]} onChange={checkDate}/>
                    <select name="selectTime" id="selectTime" disabled={!dateChosen}>
                        <option value="">Selecione um opção</option>
                        {timeList.map((timeObj) => 
                            (
                                <option style={{backgroundColor: timeObj.available ? "white" : "lightgray"}} disabled={!timeObj.available}
                                    key={timeObj.time} value={timeObj.time}>{timeObj.time}</option>

                            )
                        )}

                        
                    </select>
                    <Button variant="contained" onClick={cadastraConsulta}>Cadastrar</Button>
                </div>
                
            ) : (
                <div className={styles.cardContainer}>
                    {consultasList.map((consulta) => consulta.pacienteId === user.id && (

                        <CardConsulta
                            key={consulta.id}
                            consulta={consulta}
                            profissional={buscaProfissional(consulta.profissionalId)}
                            modalOn={modalOn}
                            setModalOn={setModalOn}
                        />
                    ))}
                </div>
            )}            

            {modalOn && (
                <Modal message="Consulta Remota" loading={false} closeModal={setModalOn} />
            )}
            {/* {modalOn && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button onClick={() => setModalOn(false)}>Fechar</button>
                    </div>
                </div>
            )} */}
        </div>
    )
}