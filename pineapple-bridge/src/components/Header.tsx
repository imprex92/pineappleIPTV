import { Link } from 'react-router-dom';
import pineApple from '../assets/PPG-Happy-Pineapple-SVG.svg'
import styles from '../styles/header.module.css'
import Nav from './Nav';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
	<header id="header" className={styles.header}>
		<Link to={'/'}><img src={pineApple} width="32" alt="Logo" /></Link>
		<h1 className={styles.title}>Pineapple IPTV</h1>
		<Nav />
	</header>
  );
}
