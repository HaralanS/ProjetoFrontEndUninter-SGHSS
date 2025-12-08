// import styles from "./DashboardComponent.module.css";

// export default function DashboardComponent() {
//     return (
//         <div className={styles.dashboardMain}>
//             <h1>Dashboard Component</h1>
//         </div>
//     );
// }

import { consultas } from "../../data/consultas";
import { internacoes } from "../../data/internacoes";
import { profissionais } from "../../data/profissionais";
import { pacientes } from "../../data/pacientes";

import {
    Box,
    Grid,
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import StatCard from "../StatCard/StatCard";

// cores pra usar nos graficos
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];


export default function DashboardComponent() {

    // Totais dos dados que foram mockados
    const totalConsultas = consultas.length;
    const totalInternacoes = internacoes.length;
    const totalProfissionais = profissionais.length;
    const totalPacientes = pacientes.length;

    // filtro pra proximas consultas
    const proximasConsultas = consultas
        .filter(c => new Date(c.data) > new Date())
        .sort((a, b) => new Date(a.data) - new Date(b.data))
        .slice(0, 5);

    // internacoes ativas
    const internados = internacoes.filter(i => i.status === "internado");

    // consultas por tipo 
    const consultasPorTipo = Object.entries(
        consultas.reduce((acc, c) => {
            acc[c.tipo] = (acc[c.tipo] || 0) + 1;
            return acc;
        }, {})
    ).map(([tipo, value]) => ({ tipo, value }));

    // filtra consultas por status
    const consultasPorStatus = Object.entries(
        consultas.reduce((acc, c) => {
            acc[c.status] = (acc[c.status] || 0) + 1;
            return acc;
        }, {})
    ).map(([status, value]) => ({ status, value }));

    const getNomePaciente = id => pacientes.find(p => p.id === id)?.nome || "Desconhecido";
    const getNomeProfissional = id => profissionais.find(p => p.id === id)?.nome || "Desconhecido";

    return (
        <Box p={4}>
            <Typography variant="h4" mb={3}>Dashboard Administrativo</Typography>

            {/* cards com os totais */}
            <Grid container spacing={3}>
                <StatCard title="Consultas Totais" value={totalConsultas} />
                <StatCard title="Internações" value={totalInternacoes} />
                <StatCard title="Profissionais" value={totalProfissionais} />
                <StatCard title="Pacientes" value={totalPacientes} />
            </Grid>

            {/* montagem dos graficos */}
            <Grid container spacing={3} mt={1}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 3 }}>
                        <Typography variant="h6" mb={2}>Consultas por Tipo</Typography>

                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={consultasPorTipo}
                                    dataKey="value"
                                    nameKey="tipo"
                                    label
                                >
                                    {consultasPorTipo.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 3 }}>
                        <Typography variant="h6" mb={2}>Consultas por Status</Typography>

                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={consultasPorStatus}>
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* tabela com as proximas consultas */}
            <Paper sx={{ mt: 4, padding: 3 }}>
                <Typography variant="h6" mb={2}>Próximas Consultas</Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {proximasConsultas.map(c => (
                            <TableRow key={c.id}>
                                <TableCell>{c.id}</TableCell>
                                <TableCell>{getNomePaciente(c.pacienteId)}</TableCell>
                                <TableCell>{getNomeProfissional(c.profissionalId)}</TableCell>
                                <TableCell>{new Date(c.data).toLocaleString("pt-BR")}</TableCell>
                                <TableCell>{c.tipo}</TableCell>
                                <TableCell>{c.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            {/* tabela d internacoes*/}
            <Paper sx={{ mt: 4, padding: 3 }}>
                <Typography variant="h6" mb={2}>Internações Ativas</Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Leito</TableCell>
                            <TableCell>Entrada</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {internados.map(i => (
                            <TableRow key={i.id}>
                                <TableCell>{i.id}</TableCell>
                                <TableCell>{getNomePaciente(i.idPaciente)}</TableCell>
                                <TableCell>{i.leito}</TableCell>
                                <TableCell>{new Date(i.dataEntrada).toLocaleDateString("pt-BR")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}



