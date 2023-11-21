import { Link } from 'react-router-dom';
import pineApple from '../assets/PPG-Happy-Pineapple-SVG.svg'
import styles from '../styles/header.module.css'
import Nav from './Nav';
import LanguageSelector from './LanguageSelector';

export interface IHeaderProps {
}

export default function Header () {
  return (
	<header id="header" className={styles.header}>
		<Link to={'/'}><img src={pineApple} width="32" alt="Logo" /></Link>
		<h1 className={styles.title}>Pineapple IPTV</h1>
		<LanguageSelector />
		<Nav />
	</header>
  );
}
