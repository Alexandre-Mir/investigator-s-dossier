import Image from "next/image";
import Link from "next/link";
import { INVESTIGATORS } from "../data/investigatorExample";
import ProfileBadge from "./profileBadge";

const characterCard = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
			{INVESTIGATORS.map((investigator) => (
				<div key={investigator.id} className="card bg-base-200 shadow-md">
					<figure>
						<Image
							src={investigator.profile.imageUrl ?? "https://placehold.co/1792x2400"}
							alt={investigator.profile.name}
							width={1792}
							height={2400}
						/>
					</figure>
					<div className="card-body ">
						<h3 className="card-title ">
							{investigator.profile.name}, {investigator.profile.age} anos
						</h3>

						<ProfileBadge
							occupation={investigator.profile.occupation}
							birthplace={investigator.profile.birthplace}
							residence={investigator.profile.residence}
						/>

						<p className="line-clamp-3 text-justify">{investigator.backstory.story}</p>

						<div className="card-actions justify-end">
							<Link className="btn btn-primary" href={`/investigator/${investigator.id}`}>
								Selecionar
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default characterCard;
