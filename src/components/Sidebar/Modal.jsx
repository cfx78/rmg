import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

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
			<div className="fixed flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					Open dialog
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}>
					<div className="min-h-screen px-4 text-center">
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
							className="inline-block h-screen align-middle"
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
							<div className="inline-block w-[80vw] h-[80vh] overflow-x-hidden p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl text-woodsmoke-50">
								<Dialog.Title className="text-3xl font-medium leading-6">
									{props.name}
								</Dialog.Title>
								<div className="mt-24 space-y-44">
									<p className="text-lg">
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
									<div className="artists-links flex justify-around gap-6">
										<a href="">
											<i class="fa-brands fa-spotify"></i>
										</a>
										<a href="">
											<i class="fa-brands fa-apple"></i>
										</a>
										<a href="">
											<i class="fa-brands fa-youtube"></i>
										</a>
									</div>
								</div>

								<div className="mt-48">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
