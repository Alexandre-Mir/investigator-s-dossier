import { Baby, Briefcase, Brain, MapPinHouse } from "lucide-react";
interface Props {
	occupation: string;
	birthplace: string;
	residence: string;
	mentalStatus: string;
}

export default function ProfileBadge({ occupation, birthplace, residence, mentalStatus }: Props) {
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
		</div>
	);
}
