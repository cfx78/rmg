import Modal from '../../components/Modal';
import './Artists.css';

const Artists = () => {
	return (
		<section id="Artists" className="Artists">
			<div className="artists--modals grid grid-cols-2 max-w-[100vw] h-full place-items-center mr-9 sm:mr-0">
				<Modal
					name="MTee Taylor"
					img="public\assets\mtee_43.JPG"
					yInit={{ y: -200 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="Wop on The Beat"
					img="public\assets\Real_Muziq_Group_Logo_Black.png"
					yInit={{ y: -200 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="Cocoa"
					img="public\assets\cc_2.JPG"
					yInit={{ y: 100 }}
					yView={{ y: 0 }}
				/>

				<Modal
					name="OchoFrom60"
					img="public\assets\Real_Muziq_Group_Logo.jpg"
					yInit={{ y: 100 }}
					yView={{ y: 0 }}
				/>
			</div>
		</section>
	);
};

export default Artists;
