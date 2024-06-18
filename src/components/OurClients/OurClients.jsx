import './styles.css';

const logos = [
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/65609afd52c3c6c606ab75de_Basel-colored.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/65607bfd386d0b0989feeb5e_KOBE-colored.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560610977eaf02b908e5389_Bristol-colored.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4902f091ccb93179b5_Bern-colored.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f0a74d7477b_TraceDefault.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e921fa22f20c3d75165_TerraDefault.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e80f229af25c5a7a7e3_SnowflakeDefault.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e601ccbbb6a54f0a397_RobotXDefault.svg',
];

//https://www.logotouse.com/logos/colored

export const OurClients = () => {
	return (
		<div className="our-clients">
			<h2>Nuestros clientes</h2>

			<div className="our-clients--logos">
				<img className="our-clients-logos--size" src={logos[0]} />
				<img className="our-clients-logos--size" src={logos[1]} />
				<img className="our-clients-logos--size" src={logos[2]} />
				{/* <img src={logos[3]} />
			<img src={logos[4]} />
			<img src={logos[5]} />
			<img src={logos[6]} />
			<img src={logos[7]} /> */}
			</div>
		</div>
	);
};
