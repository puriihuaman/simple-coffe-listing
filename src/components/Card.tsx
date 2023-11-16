import { Coffe } from "../interfaces/coffe";
import SvgIcon from "./SvgIcon";

export default function Card({ coffe }: { coffe: Coffe }) {
	return (
		<article className="card">
			<header className="image-container">
				<span className={coffe.popular ? "popular" : ""}>
					{coffe.popular && "Popular"}
				</span>
				<img className="image" src={coffe.image} alt={coffe.name} />
			</header>

			<div className="description">
				<h3>{coffe.name}</h3>
				<span className="price">{coffe.price}</span>

				<div className="qualification">
					<div className="rating">
						<SvgIcon iconID={coffe.rating ? "star-fill" : "star"} />

						<p>
							{coffe.rating}
							<span className="vote">
								{coffe.votes ? ` (${coffe.votes} votes)` : "No rating"}
							</span>
						</p>
					</div>

					<small className="sold-out">{!coffe.available && "sould out"}</small>
				</div>
			</div>
		</article>
	);
}
