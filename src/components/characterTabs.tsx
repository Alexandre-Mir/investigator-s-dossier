"use client";

import { useState, useRef } from "react";
import { Dices, Swords } from "lucide-react";
import { Investigator } from "../types/investigator";
import type { RollResult } from "../utils/diceLogic";

import AttributeRoller from "./attributeRoller";
import ResultModal from "./ResultModal";
import WeaponList from "./WeaponList";

interface TabsProps {
	character: Investigator;
}

const CharacterTabs = ({ character }: TabsProps) => {
	const [activeTab, setactiveTab] = useState(0);

	const [result, setResult] = useState<RollResult | null>(null);
	const modalRef = useRef<HTMLDialogElement>(null);

	const handleGlobalRoll = (rollResult: RollResult) => {
		setResult(rollResult);

		if (modalRef.current) {
			modalRef.current.showModal();
		}
	};

	return (
		<>
			<div
				className="tabs mx-2 bg-base-200 p-1 border border-b-0 rounded-t-lg border-base-300 "
				role="tablist"
			>
				{/* ABA 0: Atributos */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 0 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(0)}
				>
					<Dices size={18} />
				</a>
				{/* ABA 1: Combate */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 1 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(1)}
				>
					<Swords size={18} />
				</a>
			</div>
			{/* CONTEÚDO */}
			<div className="mx-2 border border-t-0 border-base-300 bg-base-200 pb-2 rounded-b-lg">
				{/* CONTEUÚDO ABA 0 */}
				{activeTab === 0 && (
					<div className="px-2">
						<AttributeRoller
							characteristics={character.characteristics}
							onRoll={handleGlobalRoll}
						/>
					</div>
				)}
				{activeTab === 1 && (
					<div className="px-2">
						<WeaponList weapons={character.combat} onRoll={handleGlobalRoll} />
					</div>
				)}
			</div>

			<ResultModal ref={modalRef} result={result} />
		</>
	);
};

export default CharacterTabs;
