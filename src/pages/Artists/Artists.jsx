import Modal from '../../components/Modal';
import './Artists.css';
import mtee from '../../img/mtee_43.png';
import blackLogo from '../../img/Real_Muziq_Group_Logo_Black.png';
import blueLogo from '../../img/Real_Muziq_Group_Logo.jpg';
import coco from '../../img/cc_2.png';
const Artists = () => {
	return (
		<section id="Artists" className="Artists">
			<div className="artists--modals grid grid-cols-2 max-w-[100vw] h-full place-items-center mr-9 sm:mr-0">
				<Modal
					name="MTee Taylor"
					img={mtee}
					yInit={{ y: -200 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="Wop on The Beat"
					img={blackLogo}
					yInit={{ y: -200 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="Cocoa"
					img={coco}
					yInit={{ y: 100 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="OchoFrom60"
					img={blueLogo}
					yInit={{ y: 100 }}
					yView={{ y: 0 }}
				/>
			</div>
		</section>
	);
};

export default Artists;
