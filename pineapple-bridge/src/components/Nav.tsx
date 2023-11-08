import { NavLink } from "react-router-dom";
import styles from '../styles/header.module.css'

export interface INavProps {
}

export default function Nav (props: INavProps) {
  return (
	<nav className={styles.navContainer}>
		<ul className={styles.navList}>
			<li className={styles.navItem}><NavLink to={'/'} className={({isActive}) => (isActive ? `${styles.nav} ${styles.nav_active}` : styles.nav)}>Home</NavLink></li>
			<li className={styles.navItem}><NavLink to={'/about'} className={({isActive}) => (isActive ? `${styles.nav} ${styles.nav_active}` : styles.nav)}>About this page</NavLink></li>
		</ul>
	</nav>
  );
}
