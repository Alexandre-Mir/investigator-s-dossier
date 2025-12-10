import { notFound } from "next/navigation";
import { INVESTIGATORS } from "@/src/data/investigatorExample";
import Link from "next/link";
import HitPointDial from "@/src/components/hpDial";
import { calculateHP, calculateMP } from "@/src/utils/rules";
import CharacterProfile from "@/src/components/characterProfile";
import CharacterTabs from "@/src/components/characterTabs";
import MpDial from "@/src/components/mpDial";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function InvestigatorPage({ params }: PageProps) {
	const resolvedParams = await params;
	const investigatorId = Number(resolvedParams.id);

	const character = INVESTIGATORS.find((inv) => inv.id === investigatorId);

	if (!character) {
		return notFound();
	}

	const maxHP = calculateHP(character.characteristics);
	const maxMP = calculateMP(character.characteristics);
	const maxSanity = 99;

	return (
		<main>
			<Link className="btn btn-secondary m-2" href="/">
				Voltar
			</Link>

			<CharacterProfile
				profileImageUrl={character.profile.imageUrl}
				profileName={character.profile.name}
				profileAge={character.profile.age}
				profileOccupation={character.profile.occupation}
				profileResidence={character.profile.birthplace}
				profileBirthplace={character.profile.residence}
			>
				<HitPointDial
					investigatorId={investigatorId}
					current={character.status.hitPoints.current}
					max={maxHP}
				/>
				<MpDial
					mpCurrent={character.status.magicPoints.current}
					mpMax={character.status.magicPoints.max}
				/>
			</CharacterProfile>

			<CharacterTabs character={character} />
		</main>
	);
}
