import { useState } from "react";
import Card from "./components/Card";
import { Coffe } from "./interfaces/coffe";
import { useGetCoffe } from "./utils/hooks/useGetCoffe";
import Loading from "./components/Loading";

function App() {
	const { loading, coffees, availables } = useGetCoffe();

	const [active, setActive] = useState<boolean>(true);

	return (
		<>
			<main>
				<div className="banner">
					<img
						src="/assets/images/bg-cafe.jpg"
						alt="bg cafe"
						className="banner-img"
					/>
				</div>

				<section className="container">
					<article className="infomation">
						<h1 className="title">Our Collection</h1>
						<p className="description">
							Introducing our Coffe Collection, a selection of unique coffees
							from different roast types and origins, expertly roasted in small
							batches and shipped fresh weekly.
						</p>
					</article>

					<nav className="navegation">
						<ul className="tabs">
							<li
								className={`item ${active ? "active" : ""}`}
								onClick={(): void => setActive(!active)}
							>
								All Products
							</li>
							<li
								className={`item ${!active ? "active" : ""}`}
								onClick={(): void => setActive(!active)}
							>
								Available Now
							</li>
						</ul>
					</nav>

					<section className="coffee-grid">
						{loading && <Loading />}

						{active &&
							coffees?.map((coffe: Coffe) => (
								<Card key={coffe.id} coffe={coffe} />
							))}

						{!active &&
							availables?.map((coffe: Coffe) => (
								<Card key={coffe.id} coffe={coffe} />
							))}
					</section>
				</section>
			</main>
		</>
	);
}

export default App;
