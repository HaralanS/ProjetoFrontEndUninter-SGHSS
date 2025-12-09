import styles from './AdminHome.module.css';

// pagina inicial do admin
export default function AdminHome() {
    return (
        <div className={styles.adminContainer}>
            <h1>Admin Home</h1>

            <p className={styles.paragraph}>
                Bem-vindo ao seu painel administrativo!
                Aqui você encontra uma visão completa das operações do VidaPlus, com acesso rápido a consultas, internações, profissionais e pacientes. Utilize os gráficos e indicadores para acompanhar o desempenho da instituição em tempo real e tomar decisões mais estratégicas.

                No VidaPlus, o administrador tem total controle sobre cadastros, agendas, processos internos e fluxos clínicos. Explore os menus ao lado e gerencie com eficiência cada parte do sistema.
                O funcionamento da instituição está nas suas mãos — conte com o VidaPlus para tornar essa tarefa mais simples e organizada.
            </p>
        </div>
    );
}
