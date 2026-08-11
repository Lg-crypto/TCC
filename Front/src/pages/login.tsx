import styles from "./login.module.css";
import SideMenu from "../components/layout/sideMenu";
import {Link, useNavigate} from "react-router-dom"
import Button from "../components/layout/button"
import Input from "../components/layout/input";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ModalMessage from "../components/layout/modalMessage";

import Logo from "../assets/logo.png"
//import { type UserType } from "../types/userType";
import { useEffect, useState } from "react";

type FormValues = {
    email: string,
    password: string
}


const loginSchema = z.object({

    email: z.email({message: 'Informe um e-mail válido.'}),

    password: z.string()
            .min(6, {message: 'Informe uma senha com 6 caracteres ou mais.'})
})

export default function Login(){
    
    //const navigate = useNavigate();
    const [open, setOpen] = useState(false)

    const { 
        register, handleSubmit, formState:{errors} 
    } = useForm<FormValues>(
        {resolver: zodResolver(loginSchema)}
    )

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const userAuthenticate = (data: FormValues)=>{
        setUserData({
            name: '',
            email: data.email,
            password: data.password
        });
        setOpen(true);
        //navigate('/home')
    }


    useEffect(()=>{
        let userDataStringfied = JSON.stringify(userData);
        sessionStorage.setItem("UserData", userDataStringfied)
        console.log(userData);
    },[userData])


    return (
        <div className={styles.container}>
            <SideMenu></SideMenu>
            <div className={styles.content}>
                <form 
                    className={styles.form}
                    onSubmit={handleSubmit(userAuthenticate)}    
                >
                    <img src={Logo} className={styles.logo}></img>

                    <Input type="email" inputName="E-mail" isRequired={true} register={register('email')}></Input>
                    <Input type="password" inputName="Password" isRequired={true} register={register('password')}></Input>
                    { errors.email && <p>{errors.email.message}</p> }
                    { errors.password && <p>{errors.password.message}</p> }

                    <Button width={150} height={50}>Entrar</Button>
                    <ModalMessage
                        isOpen={open}
                        title="Aviso"
                        onClose={() => setOpen(false)}
                    >
                        
                        <p>Nome: {userData.name}</p>
                        <p>E-mail: {userData.email}</p>
                        <p>Senha: {userData.password}</p>
                    </ModalMessage>
                    <Link to="/register" className={styles.link}>Ainda não tem uma conta?</Link>
                </form>
            </div>
        </div>
    );
}