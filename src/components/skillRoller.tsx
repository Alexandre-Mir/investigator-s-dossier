"use client";

import { useState, useRef } from "react";
import { Skills } from "@/src/types/investigator"; // Confirme o caminho da sua interface
import { rollD100, RollResult } from "@/src/utils/diceLogic"; // A lógica que criamos acima

interface Props {
	skills: Skills[];
}

export default function SkillRoller({ skills }: Props) {
	const [result, setResult] = useState<RollResult | null>(null);
	const modalRef = useRef<HTMLDialogElement>(null);

	const handleSkillClick = (skillName: string, value: number) => {
		// Usa a função externa para calcular
		const rollResult = rollD100(skillName, value);
		setResult(rollResult);

		if (modalRef.current) {
			modalRef.current.showModal();
		}
	};

	// Filtramos apenas as skills que o personagem realmente tem (acima do base ou treinadas)
	// Ajuste o filtro conforme sua preferência (ex: > 20 ou > baseValue)
	const activeSkills = skills
		.filter((s) => (s.currentValue || s.baseValue) > 0)
		.sort((a, b) => a.name.localeCompare(b.name)); // Ordena alfabeticamente

	return (
		<>
			{/* LISTA DE SKILLS INTERATIVAS */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{activeSkills.map((skill, index) => {
					const finalValue = skill.currentValue || skill.baseValue;

					return (
						<button
							key={index}
							onClick={() => handleSkillClick(skill.name, finalValue)}
							className="btn btn-ghost btn-sm justify-between font-normal hover:bg-base-200 h-auto py-2"
						>
							<span className="text-left">{skill.name}</span>
							<span className="font-mono font-bold text-primary text-lg">{finalValue}%</span>
						</button>
					);
				})}
			</div>

			{/* MODAL DE RESULTADO (Reaproveitado visualmente) */}
			<dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box text-center">
					{result && (
						<div className="flex flex-col gap-4">
							<h3 className="font-bold text-lg uppercase text-gray-500">
								Teste de {result.attribute}
							</h3>

							<div className="stats shadow">
								<div className="stat">
									<div className="stat-title">Nível</div>
									<div className="stat-value text-secondary text-2xl">{result.target}</div>
								</div>

								<div className="stat">
									<div className="stat-title">Rolagem</div>
									<div className={`stat-value text-4xl ${result.color}`}>{result.rolled}</div>
								</div>
							</div>

							<div className={`text-2xl uppercase tracking-widest ${result.color}`}>
								{result.status}
							</div>
						</div>
					)}

					<div className="modal-action justify-center">
						<form method="dialog">
							<button className="btn btn-wide">Fechar</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
