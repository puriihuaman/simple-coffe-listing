import SvgIcon from "./SvgIcon";

export default function Loading() {
	return (
		<div className="loading">
			<SvgIcon iconID="loading" />
			<p>Cargando...</p>
		</div>
	);
}
