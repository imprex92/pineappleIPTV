import pineApple from '../assets/PPG-Happy-Pineapple-SVG.svg'
import Nav from './Nav';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
	<header id="header">
		<img src={pineApple} width="32" alt="Logo" />
		<h1>Pineapple IPTV</h1>
		<Nav />
	</header>
  );
}
