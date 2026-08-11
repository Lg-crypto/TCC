import styles from './profile.module.css';
import SideMenu from '../components/layout/sideMenu';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Profile (){

    const navigate = useNavigate();
    const [UserData, setUserData] = useState(sessionStorage.getItem("UserData"));

    useEffect(()=>{   
        if (!UserData){
            navigate('/login');
        } else {
            setUserData(JSON.parse(UserData));
        }

    },[])


    return(
        <div className={styles.container}>
            <SideMenu></SideMenu>
            <div className={styles.content}>
                <h1>Hello, {UserData ? UserData.name : null}</h1>
            </div>
        </div>
    );
}