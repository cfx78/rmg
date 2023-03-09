import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';

function App() {
	return (
		<div className="App w-screen h-screen grid grid-cols-10 ">
			<header className="col-span-1 h-[100vh] ">
				<Sidebar />
			</header>
			<main className="col-span-9 ">
				<div className="outer-wrapper">
					<div className="wrapper">
						<Home />
						<About />
						<Links />
						<Contact />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
