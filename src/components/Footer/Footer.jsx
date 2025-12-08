import Anchor from '../Anchor/Anchor'
import styles from './Footer.module.css'


export default function Footer() {

    return (
        <>
            <footer className={styles.footerMolecule}>
                <Anchor href='https://github.com/haralans' label='By Haralan Santana' />
            </footer>

        </>
    )
}