"use client";

import { useState, useEffect } from "react";

interface Props {
	current: number;
	max: number;
	label?: string;
	onChange?: (newValue: number) => void;
	color?: string; // Cor base (ex: "range-success")
}

export default function HitPointDial({
	current,
	max,
	label = "HP",
	onChange,
	color = "range-success", // Padrão verde/dourado
}: Props) {
	const [value, setValue] = useState(current);

	// Sincroniza se o valor externo mudar (ex: carregou do banco de dados)
	useEffect(() => {
		setValue(current);
	}, [current]);

	// --- LÓGICA DE CORES ---
	const isDying = value < max / 3;
	const isCritical = value < max / 2;

	// Escolhe a classe de cor do DaisyUI baseada na vida
	// range-error = Vermelho | range-warning = Amarelo | range-success = Verde/Base
	const rangeColorClass = isDying ? "range-error" : isCritical ? "range-warning" : color;

	// Cor do texto do número grande
	const textColorClass = isDying
		? "text-error animate-pulse"
		: isCritical
		? "text-warning"
		: "text-base-content";

	// --- INTERAÇÃO ---
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);

		// Feedback tátil ao arrastar
		if (newValue !== value && typeof navigator !== "undefined" && navigator.vibrate) {
			navigator.vibrate(10);
		}

		setValue(newValue);
		if (onChange) onChange(newValue);
	};

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
