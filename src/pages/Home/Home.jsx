import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<section
			id="Home"
			className="Home text-woodsmoke-50 relative flex flex-col justify-center gap-32  items-center ">
			<div className="rmg--home space-y-20 max-h-[75vh] text-7xl">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}>
					<h1 className="text-[7.25rem] lg:text-[11rem]">R</h1>eal
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}>
					<h1 className="text-[7.25rem] lg:text-[11rem]">M</h1>uziq
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.5 }}>
					<h1 className="text-[7.25rem] lg:text-[11rem]">G</h1>roup
				</motion.p>
			</div>
		</section>
	);
};

export default Home;
