import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import styles from './NavBarHome.module.css'
import LinkNav from '../LinkNav/LinkNav';

export default function NavBarHome() {
    const [burger, setBurger] = useState(false)

    
    const toggleMenu = () => {
        setBurger(!burger)
    }

    return (
        <>
            <nav >
                {!burger && <div className={styles.burgerIcon} onClick={toggleMenu}><MenuIcon/></div>}
                {!burger ? <div className={styles.navmodule}>
                    <LinkNav to="/">Home</LinkNav>
                    <LinkNav to="/login">Login</LinkNav>
                    <LinkNav to="/signin">Cadastro</LinkNav>
                    
                </div> :
                <div onClick={toggleMenu} className={styles.navburger}>
                    <LinkNav to="/">Home</LinkNav>
                    <LinkNav to="/login">Login</LinkNav>
                    <LinkNav to="/signin">Cadastro</LinkNav>
                </div>}




            </nav>
        </>
    )
}

{/* <span class="material-symbols-outlined">
menu
</span> */}