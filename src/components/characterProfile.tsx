import Image from "next/image";
import ProfileBadge from "./profileBadge";

interface CharacterProfileProps {
	profileImageUrl?: string;
	profileName: string;
	profileAge: number;
	profileOccupation: string;
	profileBirthplace: string;
	profileResidence: string;
	children?: React.ReactNode;
}

const characterProfile: React.FC<CharacterProfileProps> = ({
	profileImageUrl,
	profileName,
	profileAge,
	profileOccupation,
	profileBirthplace,
	profileResidence,
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
					className="object-cover object-top"
				/>
			</figure>
			<div className="card-body">
				<h1 className="card-title inline text-primary">
					{profileName}, <span className="text-xs">{profileAge} anos</span>
				</h1>
				<ProfileBadge
					occupation={profileOccupation}
					birthplace={profileBirthplace}
					residence={profileResidence}
				/>
				{children}
			</div>
		</div>
	);
};

export default characterProfile;
