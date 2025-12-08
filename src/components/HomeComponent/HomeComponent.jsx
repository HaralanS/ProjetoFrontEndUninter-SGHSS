import { useNavigate } from 'react-router-dom';
import styles from "./HomeComponent.module.css"

export default function HomeComponent() {
    const navigate = useNavigate();

    return (
        <main className={styles.homeContainer}>
            <h1>Bem vindo ao VidaPlus!</h1>

            <button onClick={() => navigate('/login')}>Go to Login</button>
        </main>
    )
}