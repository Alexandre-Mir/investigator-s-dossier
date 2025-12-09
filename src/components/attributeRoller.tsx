"use client";

import { rollD100, RollResult } from "../utils/diceLogic";
import { Characteristics } from "../types/investigator";

interface Props {
	characteristics: Characteristics;
	onRoll: (result: RollResult) => void;
}

export default function AttributeRoller({ characteristics, onRoll }: Props) {
	const safeCharacteristics = characteristics || {};

	const handleClick = (attrName: string, value: number) => {
		// "rola o dado"
		const result = rollD100(attrName, value);
		// manda o resultado para o Pai abrir o modal
		onRoll(result);
	};

	return (
		<div className="rounded-lg bg-base-100  p-2 grid grid-cols-4 gap-4 place-items-center">
			{Object.entries(safeCharacteristics).map(([key, value]) => {
				if (key === "movimento" || key === "corpo" || typeof value !== "number") return null;

				return (
					<button
						className="btn btn-dash btn-primary flex flex-col h-14 w-20 gap-0"
						key={key}
						onClick={() => handleClick(key, value)}
					>
						<div className="text-xs uppercase font-bold">{key.substring(0, 3)}</div>
						<div className="text-lg">{value}</div>
					</button>
				);
			})}
		</div>
	);
}
