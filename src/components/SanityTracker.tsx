"use client";

interface Props {
	current: number;
	max: number;
	initial: number;
	onClick: () => void;
}

export default function SanityTracker({ current, max, initial, onClick }: Props) {
	return (
		<div>
			<button className="btn btn-warning h-12 rounded-2xl" onClick={onClick}>
				SAN: {current}/{max}/{initial}
			</button>
		</div>
	);
}
