import { NavLink } from "react-router-dom";
import styles from '../styles/header.module.css'
import { useTranslation } from 'react-i18next';


export interface INavProps {
}

export default function Nav () {
	const { t } = useTranslation();
  return (
	<nav className={styles.navContainer}>
		<ul className={styles.navList}>
			<li className={styles.navItem}><NavLink to={'/'} className={({isActive}) => (isActive ? `${styles.nav} ${styles.nav_active}` : styles.nav)}>{t('navigation.home')}</NavLink></li>
			<li className={styles.navItem}><NavLink to={'/about'} className={({isActive}) => (isActive ? `${styles.nav} ${styles.nav_active}` : styles.nav)}>{t('navigation.about')}</NavLink></li>
		</ul>
	</nav>
  );
}
