import { Button } from '@mui/material'
import styles from './Modal.module.css'
import  YoutubeIFrame  from '../YoutubeIFrame/YoutubeIFrame'


// modal que simula uma consulta remota com video do youtube
export default function Modal({message, closeModal}) {

    return(
        <>
            <div className={styles.modalExternal}>
                <div className={styles.modalContainer}>
                    
                    <p>{message}</p>
                    {/* iframe do youtube pra simular stream de consulta */}
                    <YoutubeIFrame embedId="D8CLV-MRH0k" />
                    <Button variant="contained" onClick={() => closeModal(false)}>Fechar</Button>

                </div>
            </div>
        </>
    )
}