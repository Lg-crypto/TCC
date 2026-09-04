import styles from "./account.module.css"
import SettingsSideMenu from "../../components/layout/settingsSideMenu";
import Foto from "../../assets/Higor.png"
import Window from "../../components/layout/window";

export default function Account () {
    return (
        <section className={styles.container}>
            <SettingsSideMenu></SettingsSideMenu>
            <Window width={"65vw"} height={"90vh"} className={styles.content}>
                <div className={styles.panel}>
                    <h2 className={styles.panelName}>Halejandro</h2>
                    <img src={Foto} alt="" width={250} height={250} className={styles.panelImage}/>
                </div>
                <div className={styles.infos}>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>Primeiro Nome</h4>
                        <p className={styles.infoText}>Francisco</p>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>Ultimo Nome</h4>
                        <p className={styles.infoText}>Halejandro</p>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>Numero de telefone</h4>
                        <p className={styles.infoText}>19 96969-6969</p>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>Endereço de Email</h4>
                        <p className={styles.infoText}>hl.dev.ho@gmail.com</p>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>senha</h4>
                        <p className={styles.infoText}>******</p>
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.infoTitle}>...</h4>
                        <p className={styles.infoText}>...</p>
                    </div>
                </div>
            </Window>
        </section>
    );
}