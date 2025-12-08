import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import styles from './NavBarAdmin.module.css'
import LinkNav from '../LinkNav/LinkNav';

const logout = () => {
    localStorage.removeItem("@vidaplus/dadosUsuario");
}

export default function NavBarAdmin() {
    const [burger, setBurger] = useState(false)

    
    const toggleMenu = () => {
        setBurger(!burger)
    }

    return (
        <>
            <nav >
                {!burger && <div className={styles.burgerIcon} onClick={toggleMenu}><MenuIcon/></div>}
                {!burger ? <div className={styles.navmodule}>
                    <LinkNav to="/admin">Home</LinkNav>
                    <LinkNav to="/dashboard">Dashboard</LinkNav>
                    <LinkNav to="/"><span onClick={logout}>Logout</span></LinkNav>
                    
                </div> :
                <div onClick={toggleMenu} className={styles.navburger}>
                    <LinkNav to="/admin">Home</LinkNav>
                    <LinkNav to="/dashboard">Dashboard</LinkNav>
                    <LinkNav to="/"><span onClick={logout}>Logout</span></LinkNav>
                </div>}




            </nav>
        </>
    )
}
