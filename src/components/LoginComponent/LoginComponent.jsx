import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import usuarios from '../data/usuarios.json';
import {usuarios} from '../../data/usuarios.js';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styles from './LoginComponent.module.css';

export default function LoginComponent() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
            // const usuariosList = JSON.parse(usuarios);
            const usuariosList = usuarios;
            console.log(usuariosList);
            const user = usuariosList.find((user) => user.email === data.email && user.senha === data.password);

            if (!user) {
                throw new Error('Usuário ou senha inválidos');
            }

            const dadosUsuario = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            };

            localStorage.setItem('@vidaplus/dadosUsuario', JSON.stringify(dadosUsuario));

            setTimeout(() => {
                if (user.role === 'admin') {
                    navigate('/admin');
                    return;
                }
                if (user.role === 'paciente') {
                    navigate('/user');
                    return;
                }
                if (user.role === 'profissional') {
                    navigate('/employee');
                    return;
                }
                console.log('Login bem-sucedido para usuário:', user.email);
            }, 100);
            // navigate('/logged/user');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro ao fazer login:', error.message);
            } else {
                console.error('Erro desconhecido ao fazer login:', error);
            }
        }
    };

    return (
        <main className={styles.loginContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
                <h1>Login</h1>
                {/* <label htmlFor="email">Email:</label> */}
                <TextField label="Email" variant="standard" type="email" id="email" name="email" {...register('email', { required: 'Email é obrigatório' })} />
                {errors.email && <span >{errors.email.message}</span>}
                <br />
                {/* <label htmlFor="password">Password:</label> */}
                <TextField label="Senha" variant="standard" type="password" id="password" name="password" {...register('password', { required: 'Senha é obrigatório' })}/>
                {errors.password && <span >{errors.password.message}</span>}
                <br />
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </main>
    )
}