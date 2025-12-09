// import { useNavigate } from 'react-router-dom';
import styles from "./HomeComponent.module.css"

// pagina inicial do sistema
export default function HomeComponent() {
    // const navigate = useNavigate();

    return (
        <main className={styles.homeContainer}>
            <h1>Bem vindo ao VidaPlus!</h1>

            <p className={styles.paragraph}>
                O VidaPlus é um sistema integrado de gestão hospitalar desenvolvido para oferecer praticidade, organização e eficiência no cuidado à saúde. Aqui, administradores, profissionais e pacientes encontram um ambiente seguro e intuitivo para acompanhar consultas, internações, prontuários e informações essenciais do dia a dia clínico.

                Nosso objetivo é simplificar processos, centralizar dados e proporcionar uma experiência moderna, confiável e acessível para toda a equipe. Com ferramentas de monitoramento em tempo real, dashboards inteligentes e fluxos otimizados, o VidaPlus se adapta às necessidades operacionais de instituições de qualquer porte.

                Explore o painel, acesse informações importantes e transforme a forma como sua equipe gerencia a saúde.
                O futuro da gestão hospitalar começa aqui.
            </p>

            {/* <button onClick={() => navigate('/login')}>Go to Login</button> */}
        </main>
    )
}