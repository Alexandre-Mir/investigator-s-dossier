import { Baby, Briefcase, MapPinHouse } from "lucide-react";
interface Props {
	occupation: string;
	birthplace: string;
	residence: string;
}

export default function ProfileBadge({ occupation, birthplace, residence }: Props) {
	return (
		<div>
			<span className="badge badge-xs gap-1 ">
				<Briefcase size={12} />
				{occupation}
			</span>

			<span className="badge badge-xs gap-1">
				<Baby size={12} />
				{birthplace}
			</span>
			<span className="badge badge-xs gap-1">
				<MapPinHouse size={12} />
				{residence}
			</span>
		</div>
	);
}
