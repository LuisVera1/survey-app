import './styles.css';

export const ImageLanding = () => {
	return (
		<div className="main-section flex-row">
			<div className="main-section--text devb">
				<h1 className='main-section--header'>
					Encuestas sin necesidad de registro. <br /> Comienza ahora.
				</h1>

				<a className="button-start-now main-section--button" href="">
					Crear encuesta
				</a>
			</div>

			<div className='main-section--image'>
				<img className="main-section--image--width" src="survey-cover.png" alt="survey" />
			</div>
		</div>
	);
};
