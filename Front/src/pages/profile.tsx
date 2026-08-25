import styles from './profile.module.css';
import SettingsSideMenu from '../components/layout/settingsSideMenu';

export default function Profile (){
    return(
        <div className={styles.container}>
            <SettingsSideMenu></SettingsSideMenu>
            <div className={styles.content}>

            </div>
        </div>
    );
}