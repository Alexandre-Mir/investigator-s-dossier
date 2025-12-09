import Image from "next/image";
import { MADELYN_BROWN } from "../data/investigatorExample";

const header = () => {
	return (
		<header>
			<input type="text" defaultValue={MADELYN_BROWN.profile.name} />
			<div>
				<Image
					className="rounded-md"
					src={`${MADELYN_BROWN.profile.imageUrl}`}
					alt={`${MADELYN_BROWN.backstory.personalDescription}`}
					width={120}
					height={120}
				/>
				{/* occupation */}
				{/* age */}
			</div>
		</header>
	);
};

export default header;
