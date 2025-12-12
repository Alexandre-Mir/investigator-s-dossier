"use client";

import CharacterProfile from "./characterProfile";
import HitPointDial from "./hpDial";
import MpDial from "./mpDial";
import CharacterTabs from "./characterTabs";
import SanityControlModal from "./SanityControlModal";

import { rollD100 } from "../utils/diceLogic";
import { calculateHP, calculateMaxSanity } from "@/src/utils/rules";
import { Investigator } from "../types/investigator";

import { useState, useRef } from "react";
import SanityTracker from "./SanityTracker";

export default function InvestigatorSheet({ character }: { character: Investigator }) {
	const [currentSanity, setCurrentSanity] = useState(character.status.sanity.current);
	const [mentalState, setMentalState] = useState("");
	const [dailyLoss, setDailyLoss] = useState(0);

	const modalRef = useRef<HTMLDialogElement>(null);

	const maxHP = calculateHP(character.characteristics);
	const maxSanity = calculateMaxSanity(character.skills);

	const handleSanityChange = (amount: number) => {
		const newSanity = currentSanity - amount;
		const newDailyLoss = dailyLoss + amount;

		setCurrentSanity(newSanity);
		setDailyLoss(newDailyLoss);

		if (newSanity <= 0) {
			setMentalState("Insanidade Permanente");
			alert("Você está permanente e incuravelmente insano");
		} else if (newDailyLoss >= currentSanity / 5) {
			setMentalState("Insanidade Indefinida");
			alert(
				`Insanidade Indefinida (Gatilho: Perda de 1/5 da SAN no dia.) 
				Sua mente está em frangalhos. Qualquer perda de Sanidade (mesmo 1 ponto) engatilha um novo surto. Delírios e manias são constantes até que você se recupere.`
			);
		} else if (amount >= 5) {
			const intValue = character.characteristics.intelligence;
			const result = rollD100("intelligence", character.characteristics.intelligence);
			if (result.rolled <= intValue) {
				setMentalState("Insanidade Temporária");
				alert(
					`Insanidade Temporária (Gatilho: Perda de 5+ SAN de uma vez) 
				Fase 1 (Acesso de Loucura): Dura 1D10 rodadas. O Guardião controla as ações e altera um antecedente.
				Fase 2 (Latente): Dura 1D10 horas. O controle retorna ao jogador, mas qualquer perda de SAN causa um novo acesso. Podem ocorrer delírios ou fobias.`
				);
			}
		}
	};

	return (
		<>
			<CharacterProfile
				profileImageUrl={character.profile.imageUrl}
				profileName={character.profile.name}
				profileAge={character.profile.age}
				profileOccupation={character.profile.occupation}
				profileResidence={character.profile.birthplace}
				profileBirthplace={character.profile.residence}
				mentalStatus={mentalState}
				charBuild={character.characteristics.build}
			>
				<HitPointDial
					investigatorId={character.id}
					current={character.status.hitPoints.current}
					max={maxHP}
				/>

				<div className="flex space-x-2 mt-2 place-items-center">
					<MpDial
						mpCurrent={character.status.magicPoints.current}
						mpMax={character.status.magicPoints.max}
					/>
					<SanityTracker
						current={currentSanity}
						max={maxSanity}
						initial={character.status.sanity.initial}
						onClick={() => modalRef.current?.showModal()}
					/>
				</div>
			</CharacterProfile>

			<CharacterTabs character={character} />

			<SanityControlModal
				ref={modalRef}
				onConfirm={handleSanityChange}
				onClose={() => modalRef.current?.close()}
				currentSanity={currentSanity}
			/>
		</>
	);
}
