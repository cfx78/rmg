import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className=" h-screen text-woodsmoke-50 text-center flex flex-col justify-center items-center fixed z-50">
			<div className="logo  h-1/6 hover:bg-woodsmoke-50 w-[5.35rem] duration-300 transition ease-in-out">
				<img
					className=" mt-16 mx-auto max-w-[4rem] rounded-full row-span-1 border-b-4"
					src="src\assets\Real_Muziq_Group_Logo_Black.png"
					alt="rmg logo"
				/>
			</div>
			<div className="nav-links  grid grid-flow-col grid-rows-4 h-5/6">
				<a
					className="row-span-1 pt-28 border-t-4 hover:bg-woodsmoke-50 hover:text-woodsmoke-900
                     duration-300 transition ease-in-out"
					href="#Home">
					Home
				</a>
				<a
					className="row-span-1 pt-28 border-t-4 border-t-woodsmoke-50 hover:bg-woodsmoke-50 hover:text-woodsmoke-900 duration-300 transition ease-in-out"
					href="#About">
					About
				</a>
				<a
					className="row-span-1 pt-28 border-t-4 border-t-woodsmoke-50 hover:bg-woodsmoke-50 hover:text-woodsmoke-900 duration-300 transition ease-in-out"
					href="#Links">
					Links
				</a>
				<a
					className="row-span-1 pt-28 border-y-4  border-y-woodsmoke-50 hover:bg-woodsmoke-50 hover:text-woodsmoke-900 duration-300 transition ease-in-out"
					href="#Contact">
					Contact
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
