"use client";

import { RollResult, rollD100 } from "../utils/diceLogic";
import { Skills } from "../types/investigator";
import React, { useState } from "react";
import { Star, ArrowDownAZ } from "lucide-react";

interface Props {
	skills: Skills[];
	onRoll: (result: RollResult) => void;
}

export default function SkillList({ skills, onRoll }: Props) {
	const handleClick = (skillName: string, value: number) => {
		// "rola o dado"
		const result = rollD100(skillName, value);
		// manda o resultado para o Pai abrir o modal
		onRoll(result);
	};

	const [activeTab, setactiveTab] = useState(0);

	const categories = [
		"Acadêmicas e Ciências",
		"Investigação e Percepção",
		"Sociais e Comunicação",
		"Físicas e Movimentação",
		"Técnicas e Operacionais",
		"Combate (Armas e Luta)",
	];
	const featuredSkills = skills
		.filter((skill) => {
			const realValue = skill.currentValue ?? skill.baseValue;
			const skillGroup = skill.group === "Especiais / Mythos";

			return realValue >= 50 || skillGroup;
		})
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	return (
		<>
			<div
				className="tabs mx-2 mt-2 bg-base-200 p-1 border border-b-0 rounded-t-lg border-base-300 "
				role="tablist"
			>
				{/* ABA 0: Perícias em Destaque */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 0 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(0)}
				>
					<Star size={18} />
				</a>
				{/* ABA 1: Todas as Perícias */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 1 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(1)}
				>
					<ArrowDownAZ size={18} />
				</a>
			</div>
			{/* CONTEÚDO */}
			<div className="mx-2 border border-t-0 border-base-300 bg-base-200 pb-2 rounded-b-lg">
				{/* CONTEÚDO ABA 0 */}
				{activeTab === 0 && (
					<div className="grid grid-cols-2 grid-rows-8 grid-flow-col  gap-2 bg-base-100 mx-2 p-2 rounded-xl ">
						{featuredSkills.map((skill) => {
							return (
								<button
									key={skill.name}
									onClick={() => handleClick(skill.name, skill.currentValue ?? skill.baseValue)}
									className="btn btn-soft btn-primary flex flex-col h-14 text-xs p-1  "
								>
									{skill.name} ({skill.currentValue ?? skill.baseValue}%)
								</button>
							);
						})}
					</div>
				)}
				{/* CONTEÚDO ABA 1 */}
				{activeTab === 1 && (
					<div className="px-2">
						{categories.map((category) => {
							return (
								<>
									<details className="collapse collapse-plus bg-base-100 mb-2">
										<input className="absolute" type="radio" name="my-accordion-3" defaultChecked />
										<summary className="collapse-title" key={category}>
											{category}
										</summary>
										<div className="collapse-content bg-base-300 p-2">
											{skills
												.filter((skill) => {
													const realValue = skill.currentValue ?? skill.baseValue;
													return (
														realValue > 5 &&
														skill.group === `${category}` &&
														skill.name !== `${featuredSkills}`
													);
												})
												.sort((a, b) => {
													return a.name.localeCompare(b.name);
												})
												.map((categorySkill) => {
													return (
														<button
															key={categorySkill.name}
															onClick={() =>
																handleClick(
																	categorySkill.name,
																	categorySkill.currentValue ?? categorySkill.baseValue
																)
															}
															className="z-1 btn btn-soft text-xs p-1 mr-1 mb-1"
														>
															{categorySkill.name}
														</button>
													);
												})}
										</div>
									</details>
								</>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}
