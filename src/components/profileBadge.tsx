import { Baby, Briefcase, Brain, MapPinHouse, PersonStanding } from "lucide-react";
interface Props {
	occupation: string;
	birthplace: string;
	residence: string;
	mentalStatus?: string;
	charBuild: number;
}

export default function ProfileBadge({
	occupation,
	birthplace,
	residence,
	mentalStatus,
	charBuild,
}: Props) {
	return (
		<div className="gap-1 w-48">
			<span className="badge badge-xs  ">
				<Briefcase size={12} />
				{occupation}
			</span>
			<span className="badge badge-xs ">
				<Baby size={12} />
				{birthplace}
			</span>
			<span className="badge badge-xs ">
				<MapPinHouse size={12} />
				{residence}
			</span>

			{mentalStatus && mentalStatus !== "Normal" && (
				<span className="badge badge-xs  badge-error">
					<Brain size={12} />
					{mentalStatus}
				</span>
			)}

			{charBuild && charBuild > 0 ? (
				<span className="badge badge-xs">
					<PersonStanding size={12} />
					Robusto
				</span>
			) : null}
		</div>
	);
}
