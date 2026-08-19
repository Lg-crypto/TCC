import styles from "./settingsSideMenu.module.css";
import { LuSlidersVertical, LuShield, LuInfo, LuTrash2,  LuCircleHelp, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

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
                <Link to={'/'} className={styles.option}>
                    <LuUser size={20}/> Conta
                </Link>
                <Link to={'/'} className={styles.option}>
                    <LuSlidersVertical size={20}/> Preferencias
                </Link>
                <Link to={'/'} className={styles.option}>
                    <LuShield size={20}/> Privacidade
                </Link>

                <h5 className={styles.subtitle}>Sobre</h5>
                <Link to={'/'} className={styles.option}>
                    <LuInfo size={20}/> Sobre nós
                </Link>

                <h5 className={styles.subtitle}>Ações</h5>                
                <Link to={'/'} className={(styles.option) +" "+ (styles.deleteAccount)}>
                    <LuTrash2 size={20}/> Apagar conta
                </Link>
                <Link to={'/'} className={(styles.option) +" "+ (styles.help)}>
                    <LuCircleHelp size={20}/> Precisa de ajuda? Acesse o centro de ajuda.
                </Link>
            </nav>
        </aside>
    )
}