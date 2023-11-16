export default function SvgIcon({ iconID }: { iconID: string }) {
	return (
		<span className="icon">
			<svg className="icon-svg">
				<use href={`/assets/icons/svg-icons.svg#${iconID}`} />
			</svg>
		</span>
	);
}
