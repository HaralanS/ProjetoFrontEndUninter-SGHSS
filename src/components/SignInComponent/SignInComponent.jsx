import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {usuarios} from '../../data/usuarios.js';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from '@mui/material';
import styles from './SignInComponent.module.css';

// schema com yup pra ajudar na validacao do formulario
const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Senhas devem coincidir')
        .required('Confirmação de senha é obrigatória'),
});

// componente principal da pagina de cadastro
export default function SignInComponent() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // funcao que eh usada no submit do formulario de cadastro
    const onSubmit = async (data) => {
        try {

            // verifica se ja existe algum usuario cadastrado com o email informado
            const user = usuarios.find((user) => user.email === data.email);

            if (user) {
                throw new Error('Email já cadastrado! Use outro email.');
            }

            const dadosUsuario = {
                id: nanoid(),
                nome: data.name,
                email: data.email,
                senha: data.password,
                role: 'paciente',
            };

            // adiciona o novo usuario na lista de usuarios
            usuarios.push(dadosUsuario);
            console.log(usuarios);

            console.log('Login bem-sucedido para usuário:', dadosUsuario.email);

            // aviso de cadastro realizado com sucesso e redireciona para a página de login
            alert('Cadastro realizado com sucesso! Redirecionando para a página de login.');
            setTimeout(() => { 
                navigate('/login');
            }, 1000);

            // navigate('/logged/user');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erro ao fazer login:', error.message);
            } else {
                console.error('Erro desconhecido ao fazer login:', error);
            }
        }
    };

    // formulario de cadastro usando react-hook-form e yup para validacao
    return (
        <div className={styles.signinContainer}>
            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastro</h1>
                <TextField label="Nome" variant="standard"  type="text" id="name" name="name" {...register('name', { required: 'Nome é obrigatório' })} />
                {errors.name && <span >{errors.name.message}</span>}
                <br />
                <TextField label="Email" variant="standard"  type="email" id="email" name="email" {...register('email')} />
                {errors.email && <span >{errors.email.message}</span>}
                <br />
                <TextField label="Password" variant="standard"  type="password" id="password" name="password" {...register('password')} />
                {errors.password && <span >{errors.password.message}</span>}
                <br />
                <TextField label="Confirma Senha" variant="standard"  type="password" id="confirmPassword" name="confirmPassword" {...register('confirmPassword')} />
                {errors.confirmPassword && <span >{errors.confirmPassword.message}</span>}
                <br />
                <Button variant="contained" type="submit">Cadastrar</Button>
            </form>
        </div>
    )
}