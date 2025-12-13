"use client";

import { useState, useRef } from "react";
import { Dices, Swords, Scroll, X, Crosshair, HandFist, History } from "lucide-react";
import { Investigator, Combat } from "../types/investigator";
import { rollD100, type RollResult, calculateDamage } from "../utils/diceLogic";

import AttributeRoller from "./attributeRoller";
import ResultModal from "./ResultModal";
import CharacterBackstory from "./characterBackstory";
import SkillList from "./SkillList";

import { calculateDamageBonus } from "../utils/rules";
import RollHistoryList from "./RollHistoryList";

interface TabsProps {
	character: Investigator;
}

const CharacterTabs = ({ character }: TabsProps) => {
	const [activeTab, setactiveTab] = useState(0);
	const [result, setResult] = useState<RollResult | null>(null);
	const [rollHistory, setRollHistory] = useState<RollResult[]>([]);

	const modalRef = useRef<HTMLDialogElement>(null);

	const handleGlobalRoll = (newRoll: RollResult) => {
		setResult(newRoll);
		setRollHistory([newRoll, ...rollHistory]);

		if (modalRef.current) {
			modalRef.current.showModal();
		}
	};

	const handleWeaponRoll = (weapon: Combat) => {
		const skillFound = character.skills.find((s) => s.name === weapon.skillUsed);

		const skillValue = skillFound ? skillFound.currentValue || skillFound.baseValue : 0;

		const damageBonus = calculateDamageBonus(character.characteristics);

		const result = rollD100(weapon.name, skillValue);

		if (result.status.includes("Sucesso")) {
			const finalDamage = calculateDamage(weapon.damage, damageBonus);

			result.damageValue = finalDamage;
		}

		handleGlobalRoll(result);
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
				{/* ABA 2: Antecedentes */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 2 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(2)}
				>
					<Scroll size={18} />
				</a>
			</div>
			{/* CONTEÚDO */}
			<div className="mx-2 border border-t-0 border-base-300 bg-base-200 pb-2 rounded-b-lg">
				{/* CONTEÚDO ABA 0 */}
				{activeTab === 0 && (
					<div className="px-2">
						<AttributeRoller
							characteristics={character.characteristics}
							onRoll={handleGlobalRoll}
						/>
					</div>
				)}
				{/* CONTEÚDO ABA 1 */}
				{activeTab === 1 && (
					<div className="px-2 ">
						<div className="p-2 bg-base-100 rounded-lg flex flex-wrap">
							{character.combat.map((weapon) => {
								const weaponSkill = weapon.skillUsed;
								const skillFound = character.skills.find((s) => s.name === weaponSkill);

								const skillValue =
									skillFound ?? skillFound ? skillFound?.currentValue || skillFound.baseValue : 0;

								return (
									<button
										key={weapon.name}
										onClick={() => {
											handleWeaponRoll(weapon);
										}}
										className="btn btn-soft btn-error mr-2 text-xs "
									>
										{weapon.range !== 0 ? <Crosshair size={14} /> : <HandFist size={14} />}
										{weapon.name} ({skillValue}%)
									</button>
								);
							})}
						</div>
					</div>
				)}
				{/* CONTEÚDO ABA 2 */}
				{activeTab === 2 && (
					<div className="mx-2 bg-base-100 rounded-lg">
						<div className="w-full p-2">
							<CharacterBackstory title="Minha História">
								<span>{character.backstory.story}</span>
							</CharacterBackstory>
							<div className="divider">
								<X />
							</div>
							<CharacterBackstory title="Antecedentes">
								{character.backstory.personalDescription &&
									character.backstory.personalDescription !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Descrição Pessoal</h4>
											<p>{character.backstory.personalDescription}</p>
										</div>
									)}
								{character.backstory.traits && character.backstory.traits !== "" && (
									<div className="bg-base-100 rounded-lg px-2">
										<h4>Características</h4>
										<p>{character.backstory.traits}</p>
									</div>
								)}
								{character.backstory.ideologyBeliefs &&
									character.backstory.ideologyBeliefs !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Ideologia/Crenças</h4>
											<p>{character.backstory.ideologyBeliefs}</p>
										</div>
									)}
								{character.backstory.injuriesScars && character.backstory.injuriesScars !== "" && (
									<div className="bg-base-100 rounded-lg px-2">
										<h4>Ferimentos & Cicatrizes</h4>
										<p>{character.backstory.injuriesScars}</p>
									</div>
								)}
								{character.backstory.significantPeople &&
									character.backstory.significantPeople !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Pessoas Significativas</h4>
											<p>{character.backstory.significantPeople}</p>
										</div>
									)}
								{character.backstory.phobiasManias && character.backstory.phobiasManias !== "" && (
									<div className="bg-base-100 rounded-lg px-2">
										<h4>Fobias & Manias</h4>
										<p>{character.backstory.phobiasManias}</p>
									</div>
								)}
								{character.backstory.meaningfulLocations &&
									character.backstory.meaningfulLocations !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Locais Importantes</h4>
											<p>{character.backstory.meaningfulLocations}</p>
										</div>
									)}
								{character.backstory.meaningfulLocations &&
									character.backstory.meaningfulLocations !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Locais Importantes</h4>
											<p>{character.backstory.meaningfulLocations}</p>
										</div>
									)}
								{character.backstory.arcaneTomesSpells &&
									character.backstory.arcaneTomesSpells !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Tomos Arcanos, Feitiços & Artefatos</h4>
											<p>{character.backstory.arcaneTomesSpells}</p>
										</div>
									)}

								{character.backstory.treasuredPossessions &&
									character.backstory.treasuredPossessions !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Pertences Queridos</h4>
											<p>{character.backstory.treasuredPossessions}</p>
										</div>
									)}
								{character.backstory.encountersWithStrangeEntities &&
									character.backstory.encountersWithStrangeEntities !== "" && (
										<div className="bg-base-100 rounded-lg px-2">
											<h4>Encontros com Entidades Estranhas</h4>
											<p>{character.backstory.encountersWithStrangeEntities}</p>
										</div>
									)}
							</CharacterBackstory>
						</div>
					</div>
				)}
			</div>
			<SkillList skills={character.skills} onRoll={handleGlobalRoll} />

			<RollHistoryList rollResultArray={rollHistory} />

			<ResultModal ref={modalRef} result={result} />
		</>
	);
};

export default CharacterTabs;
