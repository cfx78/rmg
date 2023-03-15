import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
export default function Modal(props) {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<motion.div
				initial={props.yInit}
				transition={{ type: 'tween', duration: 0.5 }}
				whileInView={props.yView}
				className="flex flex-col justify-center items-center gap-10">
				<img
					src={props.img}
					className="rounded-xl border-4 w-28 h-28 sm:w-96 sm:h-96"
				/>

				<button
					type="button"
					onClick={openModal}
					className="px-4 py-2 text-sm font-medium text-white bg-woodsmoke-200 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					{props.name}
				</button>
			</motion.div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto ml-14"
					onClose={closeModal}>
					<div className="sm:min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block sm:h-screen align-middle"
							aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<div className="inline-block sm:w-[80vw] sm:h-[80vh] overflow-x-hidden p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl text-woodsmoke-50">
								<Dialog.Title className="sm:text-6xl font-medium sm:leading-6 text-center">
									{props.name}
								</Dialog.Title>
								<div className="sm:mt-24 sm:space-y-44">
									<img
										src={props.img}
										className="float-left  sm:w-64 w-32 p-3 rounded-3xl"
									/>
									<p className=" text-xs sm:text-lg ">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Debitis nesciunt
										aliquid earum itaque officia assumenda
										esse quaerat. Adipisci recusandae
										accusamus temporibus ipsa excepturi
										perspiciatis, cupiditate reprehenderit
										doloribus, voluptatem aperiam nesciunt!
										Earum inventore, nobis vel officia iure
										numquam sunt consequuntur deserunt
										expedita enim nam beatae quidem
										laboriosam, adipisci quia est sequi
										ipsum itaque? Odio error magnam impedit
										velit assumenda, et officia. Possimus
										totam, tempore, vel vitae doloremque
										vero tempora ut, officia voluptatum nam
										laboriosam nemo modi iure ex consequatur
										exercitationem obcaecati ad quaerat
										nostrum error hic? Numquam facere odio
										illo vitae! Odio eum recusandae harum,
										illum rem quibusdam, neque id at qui
										aliquid reiciendis eos nisi iste veniam
										nemo laudantium, a vel quam expedita
										deleniti ipsum! In quos deleniti eos
										quae? Suscipit accusantium omnis modi ut
										rem recusandae voluptatum maiores
										incidunt neque. Veritatis fuga
										voluptatibus praesentium consequatur
										neque nulla beatae alias quibusdam cum
										fugit, temporibus vel nam natus magni
										rerum esse.
									</p>
									<div className="artists-links flex justify-around gap-6 mb-9">
										<a
											href="https://open.spotify.com/artist/1nW44pBv3rPmyfW3fd3pm2"
											target="_blank">
											<i class="fa-brands fa-spotify fa-3x"></i>
										</a>
										<a
											href="https://music.apple.com/us/artist/mtee-taylor/1481915107"
											target="_blank">
											<i class="fa-brands fa-apple fa-3x"></i>
										</a>
										<a
											href="https://www.youtube.com/channel/UC2JAKuVrWB6ns5qw_6dXUmQ?app=desktop"
											target="_blank">
											<i class="fa-brands fa-youtube fa-3x"></i>
										</a>
									</div>
								</div>

								<div className="sm:mt-48 w-full flex justify-center items-center">
									<button
										type="button"
										className="inline-flex justify-center py-2 px-4 sm:py-4 sm:text-xl font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:w-full "
										onClick={closeModal}>
										Close
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
