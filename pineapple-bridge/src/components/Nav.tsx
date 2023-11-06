import { Link } from "react-router-dom";

export interface INavProps {
}

export default function Nav (props: INavProps) {
  return (
	<nav>
		<ul className="navListWrapper">
			<li className="navItem"><Link to={'/'}>Home</Link></li>
			<li className="navItem"><Link to={'/about'}>About this page</Link></li>
		</ul>
	</nav>
  );
}
