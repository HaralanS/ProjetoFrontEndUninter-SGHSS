import styles from '../components/HomeComponent/HomeComponent.module.css';

// pagina de not found para rotas inexistentes
export default function NotFound() {
    return(
        <div className={styles.homeContainer}>
            <h1>Not Found</h1>
        </div>
    )
}