import { Button } from '@mui/material'
import styles from './Modal.module.css'
import  YoutubeIFrame  from '../YoutubeIFrame/YoutubeIFrame'



export default function Modal({message, closeModal}) {


    return(
        <>
            <div className={styles.modalExternal}>
                <div className={styles.modalContainer}>
                    
                    <p>{message}</p>
                    {/* <YoutubeIFrame embedId="dQw4w9WgXcQ" /> */}
                    <YoutubeIFrame embedId="D8CLV-MRH0k" />
                    <Button variant="contained" onClick={() => closeModal(false)}>Fechar</Button>

                </div>
            </div>
        </>
    )
}