import styles from "./settingsSideMenu.module.css";
import { LuSlidersVertical, LuShield, LuInfo, LuTrash2,  LuCircleHelp, LuUser, LuArrowLeft } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function SettingsSideMenu () {
    return(
        <aside className={styles.container}>
            <div className={styles.miniHeader}>
                <div className={styles.icon}>
                    <LuUser size={30}/>
                </div>
                <div className={styles.miniHeaderTexts}>
                    <h2 className={styles.title}>Configurações</h2>
                    <h5 className={styles.subtitle}>Conta</h5>
                </div>
            </div>

            <nav className={styles.optionsContainer}>
                <h5 className={styles.subtitle}>Conta</h5>
                <NavLink to={'/profile/'} className={styles.option}>
                    <LuUser size={20}/> Conta
                </NavLink>
                <NavLink to={'/profile/settings'} className={styles.option}>
                    <LuSlidersVertical size={20}/> Preferencias
                </NavLink>
                <NavLink to={'/profile/'} className={styles.option}>
                    <LuShield size={20}/> Privacidade
                </NavLink>

                <h5 className={styles.subtitle}>Sobre</h5>
                <NavLink to={'/about'} className={styles.option}>
                    <LuInfo size={20}/> Sobre nós
                </NavLink>

                <h5 className={styles.subtitle}>Ações</h5>                
                <NavLink to={'/profile/account'} className={(styles.option) +" "+ (styles.deleteAccount)}>
                    <LuTrash2 size={20}/> Apagar conta
                </NavLink>
                <NavLink to={'/profile/account'} className={(styles.option) +" "+ (styles.help)}>
                    <LuCircleHelp size={20}/> Precisa de ajuda? Acesse o centro de ajuda.
                </NavLink>
                <NavLink to={'/'} className={(styles.option) +" "+ (styles.back)}>
                    <LuArrowLeft size={20}/>
                </NavLink>
            </nav>
        </aside>
    )
}