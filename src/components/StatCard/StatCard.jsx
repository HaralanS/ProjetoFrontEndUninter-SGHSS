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

// card para os dados torais no dashboard
export default function StatCard({ title, value }) {
    return (
        <Grid item xs={12} md={3}>
            <Paper sx={{ padding: 3, textAlign: "center" }}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h4" fontWeight="bold">
                    {value}
                </Typography>
            </Paper>
        </Grid>
    );
}