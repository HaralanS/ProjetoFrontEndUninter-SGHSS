import { Link } from "react-router-dom"
import styles from './LinkNav.module.css'


export default function LinkNav({children, to}){
    return (
        <>
            <Link className={styles.linkNavModule} to={to}>{children}</Link>
        </>
    )
}