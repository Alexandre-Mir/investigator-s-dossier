import { notFound } from "next/navigation";
import { INVESTIGATORS } from "@/src/data/investigatorExample";
import Link from "next/link";
import InvestigatorSheet from "@/src/components/InvestigatorSheet";
import SkillList from "@/src/components/SkillList";

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

	return (
		<main>
			<Link className="btn btn-secondary m-2" href="/">
				Voltar
			</Link>

			<InvestigatorSheet character={character} />
		</main>
	);
}
