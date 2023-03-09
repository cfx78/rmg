import './Home.css';

const Home = () => {
	return (
		<section
			id="Home"
			className="Home text-woodsmoke-50 relative flex flex-col justify-center gap-32  items-center ">
			<div className="rmg--home space-y-20 max-h-[75vh] text-7xl">
				<p>
					<h1 className="text-[7.25rem] lg:text-[11rem]">R</h1>eal
				</p>
				<p>
					<h1 className="text-[7.25rem] lg:text-[11rem]">M</h1>uziq
				</p>
				<p>
					<h1 className="text-[7.25rem] lg:text-[11rem]">G</h1>roup
				</p>
			</div>
		</section>
	);
};

export default Home;
