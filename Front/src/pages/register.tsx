import styles from "./register.module.css";
import SideMenu from "../components/layout/sideMenu";
import {Link} from "react-router-dom"
import Button from "../components/layout/button"
import Input from "../components/layout/input";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ModalMessage from "../components/layout/modalMessage";

import Logo from "../assets/logo-clara.png";
import { type UserType } from "../types/userType";
import { useEffect, useState } from "react";

type FormValues = {
    name: string
    email: string,
    password: string
}


const loginSchema = z.object({

    email: z.email({message: 'Informe um e-mail válido.'}),
    name: z.string()
            .min(6, {message: 'Informe um nome com 6 caracteres ou mais.'}),

    password: z.string()
            .min(6, {message: 'Informe uma senha com 6 caracteres ou mais.'})
})

export default function Register(){
    const [open, setOpen] = useState(false)

    const { 
        register, handleSubmit, formState:{errors} 
    } = useForm<FormValues>(
        {resolver: zodResolver(loginSchema)}
    )

    const [userData, setUserData]= useState<UserType>({
        name: '',
        email: '',
        password: ''
    })

    const userAuthenticate = (data: FormValues)=>{
        setUserData({
            name: data.name,
            email: data.email,
            password: data.password
        });
        setOpen(true)
    }

    useEffect(()=>{
        sessionStorage.setItem("UserData", JSON.stringify({
            name: userData.name,
            email: userData.email
        }));
    },[userData])






    return (
        <div className={styles.container}>
            <SideMenu></SideMenu>
            <div className={styles.content}>
                <form 
                    className={styles.form}
                    onSubmit={handleSubmit(userAuthenticate)}    
                >
                    <img src={Logo} className={styles.logo} alt="WWallet" />

                    <Input type="email" inputName="E-mail" isRequired={true} register={register('email')}></Input>
                    <Input type="text" inputName="Name" isRequired={true} register={register('name')}></Input>
                    <Input type="password" inputName="Password" isRequired={true} register={register('password')}></Input>
                    { errors.name && <p>{errors.name.message}</p> }
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
                    </ModalMessage>
                    <Link to="/login" className={styles.link}>Já possui uma conta?</Link>
                </form>
            </div>
        </div>
    );
}
