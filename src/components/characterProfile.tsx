import Image from "next/image";
import ProfileBadge from "./profileBadge";

interface Props {
	profileImageUrl?: string;
	profileName: string;
	profileAge: number;
	profileOccupation: string;
	profileBirthplace: string;
	profileResidence: string;
	mentalStatus: string;
	charBuild: number;
	children?: React.ReactNode;
}

const characterProfile: React.FC<Props> = ({
	profileImageUrl,
	profileName,
	profileAge,
	profileOccupation,
	profileBirthplace,
	profileResidence,
	mentalStatus,
	charBuild,
	children,
}) => {
	return (
		<div className="card card-side bg-base-200 border border-base-300 m-2">
			<figure>
				<Image
					src={profileImageUrl ?? "https://placehold.co/400x600"}
					alt={profileName}
					height={100}
					width={100}
					className="object-cover object-center"
				/>
			</figure>
			<div className="card-body">
				<h1 className="card-title inline text-primary text-nowrap">
					{profileName}, <span className="text-xs m-0">{profileAge} anos</span>
				</h1>
				<ProfileBadge
					occupation={profileOccupation}
					birthplace={profileBirthplace}
					residence={profileResidence}
					mentalStatus={mentalStatus}
					charBuild={charBuild}
				/>
				{children}
			</div>
		</div>
	);
};

export default characterProfile;
