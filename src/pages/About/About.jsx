import './About.css';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<section id="About" className="About text-woodsmoke-50">
			<motion.div
				initial={{ scale: 0 }}
				transition={{ type: 'tween', duration: 0.5 }}
				whileInView={{ scale: 1 }}
				className="sm:h-screen  flex flex-col justify-center items-center  relative sm:text-5xl">
				<blockquote className="sm:mb-20 phrase text-center italic ">
					"You don't just hear it, you feel it"
				</blockquote>
				<p className=" sm:text-2xl sm:max-w-3xl">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quod dolorem eveniet hic necessitatibus. Corporis id magnam,
					suscipit reprehenderit sunt dolorum aut alias consectetur,
					rem quaerat illum dignissimos, laboriosam quisquam?
					Suscipit? Accusamus magni provident est hic aut harum vel
					sint veritatis temporibus molestias! Unde quas ad qui
					dolorem voluptas nam, officiis ipsa vero quos, nostrum
					expedita facilis, velit sit quis excepturi. Eligendi,
					suscipit facilis! Dolorum, quas non fugiat reprehenderit et
					atque cumque sed aliquam totam earum officia natus obcaecati
					alias deserunt, deleniti qui numquam odit iusto est
					accusamus laudantium saepe dolor. Enim iusto, eos tempore
					aliquam repudiandae fugiat sequi rem earum? Nostrum, libero.
					Assumenda maxime deserunt ad impedit eaque commodi nisi quae
					provident! Assumenda voluptatem ex autem nemo ipsa, tempora
					quaerat?
				</p>
			</motion.div>
		</section>
	);
};

export default About;
