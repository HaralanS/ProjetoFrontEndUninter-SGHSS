
import { Link } from 'react-router-dom';
import styles from './Header.module.css'


// header padrao que recebe um componte nav como chil;dren nos layouts
export default function Header({children}){
    return (<>
        <header className={styles.topo}>
            <Link className={styles.link} to="/"><h2>VidaPlus</h2></Link>
            
            {children}

        </header>
    </>)
}