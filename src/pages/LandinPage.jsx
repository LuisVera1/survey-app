import { BasicNavbar, Characteristics, OurClients } from '../components';
import { ImageLanding } from '../components/ImageLanding/ImageLanding';

export const LandingPage = () => {
	return (
		<div className="container">
			
				<BasicNavbar />

				<main>
					<ImageLanding />
				</main>

				<section>
					<OurClients />
				</section>

				<section>
					<Characteristics />
				</section>

				<section>
					<p>crear encuesta</p>
				</section>

				<footer>
					<p>pie de pagina</p>
				</footer>
		</div>
	);
};
