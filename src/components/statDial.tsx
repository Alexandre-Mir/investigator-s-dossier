"use client";

import { useState, useEffect } from "react";

interface Props {
	current: number;
	max: number;
	label: string;
	colorClass?: string;
	onChange?: (newValue: number) => void;
}

export default function StatDial({
	current,
	max,
	label,
	colorClass = "range-primary",
	onChange,
}: Props) {
	const [value, setValue] = useState(current);

	useEffect(() => {
		setValue(current);
	}, [current]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target);
	};
}
