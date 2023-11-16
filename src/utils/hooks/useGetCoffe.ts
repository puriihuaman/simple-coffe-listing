import { useEffect, useState } from "react";
import { Coffe } from "../../interfaces/coffe";
const API_URL =
	"https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
export const useGetCoffe = (): {
	loading: boolean;
	coffees: Coffe[];
	availables: Coffe[];
} => {
	const [loading, setLoading] = useState<boolean>(true);
	const [coffees, setCoffees] = useState<Coffe[]>([]);
	const [availables, setAvailables] = useState<Coffe[]>([]);

	useEffect((): void => {
		const getProduct = (): void => {
			fetch(API_URL)
				.then((response) => response.json())
				.then((data: Coffe[]): void => {
					setLoading(true);
					setCoffees(data);
					setAvailables(
						data.filter((coffe: Coffe): boolean => coffe.available)
					);
					setLoading(false);
				})
				.catch((ex): void => {
					console.log(ex);
				});
		};

		getProduct();
	}, []);

	return { loading, coffees, availables };
};
