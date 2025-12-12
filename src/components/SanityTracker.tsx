"use client";

import { Brain } from "lucide-react";

interface Props {
	current: number;
	max: number;
	initial: number;
	onClick: () => void;
}

export default function SanityTracker({ current, max, initial, onClick }: Props) {
	const maxSanity = Math.floor((max / 99) * 100);
	const currentSanity = Math.floor((current / 99) * 100);
	return (
		<div className="relative w-12 h-12" onClick={onClick}>
			<div
				className="radial-progress text-warning absolute z-2 inset-0 flex justify-center items-center scale-60 -translate-x-4 -translate-y-4 "
				style={{ "--value": currentSanity }}
			></div>
			<div
				className="radial-progress text-warning-content absolute inset-0 z-1 flex justify-center items-center scale-60 -translate-x-4 -translate-y-4"
				style={{ "--value": maxSanity }}
			></div>
			<div
				className="radial-progress text-fuchsia-950 absolute inset-0 flex justify-center items-center scale-60 -translate-x-4 -translate-y-4"
				style={{ "--value": 100 }}
			></div>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-warning">
				<Brain />
			</div>
		</div>
	);
}
