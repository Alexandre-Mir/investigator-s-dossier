"use client";

import useResource from "../hooks/useResource";

interface Props {
	current: number;
	max: number;
	label?: string;
	onChange?: (newValue: number) => void;
	color?: string;
}

export default function HitPointDial({
	current,
	max,
	label = "HP",
	onChange,
	color = "range-success", // Padrão verde/dourado
}: Props) {
	const { value, updateValue, isDying, isCritical } = useResource(current, max, onChange);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		updateValue(newValue);
	};

	const rangeColorClass = isDying ? "range-error" : isCritical ? "range-warning" : color;

	const textColorClass = isDying
		? "text-error animate-pulse"
		: isCritical
		? "text-warning"
		: "text-base-content";

	return (
		<div className="w-full max-w-xs flex flex-col gap-2">
			{/* CABEÇALHO: Rótulo e Valor Numérico Grande */}
			<div className="flex justify-between items-end px-1">
				<span className="text-xs font-bold uppercase tracking-widest opacity-60">{label}</span>
				<div className="flex items-baseline gap-1">
					<span className={`text-4xl font-black font-mono transition-colors ${textColorClass}`}>
						{value}
					</span>
					<span className="text-xs font-bold opacity-40">/ {max}</span>
				</div>
			</div>

			{/* O SLIDER (RANGE) */}
			<input
				type="range"
				min={0}
				max={max}
				value={value}
				onChange={handleChange}
				className={`range range-xs ${rangeColorClass} transition-colors duration-300`}
				step="1"
			/>

			{/* MARCADORES VISUAIS (TICKS) */}
			{/* Calculamos 5 pontos de referência: 0%, 25%, 50%, 75%, 100% */}
			<div className="w-full flex justify-between px-1 text-xs opacity-30">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div>

			{/* NÚMEROS DE REFERÊNCIA */}
			<div className="w-full flex justify-between px-1 text-[10px] font-mono opacity-50">
				<span className="font-bold">0</span>
				{/* Mostra valores intermediários aproximados */}
				<span>{Math.round(max * 0.25)}</span>
				<span className="font-bold">{Math.round(max * 0.5)}</span> {/* Metade (Lesão Grave) */}
				<span>{Math.round(max * 0.75)}</span>
				<span className="font-bold">{max}</span>
			</div>
		</div>
	);
}
