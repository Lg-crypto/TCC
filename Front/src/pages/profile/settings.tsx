import styles from "./settings.module.css"
import SettingsSideMenu from "../../components/layout/settingsSideMenu"
import Window from "../../components/layout/window"

export default function Settings(){
    return(
        <section className={styles.container}>
            <SettingsSideMenu></SettingsSideMenu>
            <Window width={"65vw"} height={"90vh"} className={styles.content}>
                <h2 className={styles.title}>Interface</h2>
                <div className={styles.settingsRow}>
                    <label htmlFor="ThemeSelect">Tema da interface</label>
                    <select className={styles.select} name="ThemeSelect" id="ThemeSelect">
                        <option value="automatic">Automatico</option>
                    </select>
                </div>
                <div className={styles.settingsRow}>
                    <label htmlFor="LanguageSelect">Idioma da interface</label>
                    <select className={styles.select} name="LanguageSelect" id="LanguageSelect">
                        <option value="automatic">Português</option>
                    </select>
                </div>
                <h2 className={styles.title}>Notificações</h2>
                <div className={styles.settingsRow}>
                    <label htmlFor="NotifySelect">Mostrar Notificações</label>
                    <input className={styles.check} type="checkbox" name="NotifyCheck" id="NotifyCheck" />
                </div>
                <div className={styles.settingsRow}>
                    <label htmlFor="ReminderCheck">Lembrete Diario</label>
                    <input className={styles.check} type="checkbox" name="ReminderCheck" id="ReminderCheck" />
                </div>
            </Window>
        </section>
    )
}