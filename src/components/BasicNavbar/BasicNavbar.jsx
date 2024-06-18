import { Link } from 'react-router-dom';
import './styles.css';

export const BasicNavbar = () => {
	return (
		<nav className="navigation-bar">
			<div>
				<img className="navigation-bar--logo" src="/logo.svg" alt="Easy Survey" />
			</div>

			<div>
				<Link className="button-start-now" to="/new">
					Crear Encuesta
				</Link>
			</div>
		</nav>
	);
};
