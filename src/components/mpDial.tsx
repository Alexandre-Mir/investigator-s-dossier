"use client";

import { useState } from "react";

interface mpProps {
	mpCurrent: number;
	mpMax: number;
}

const mpDial: React.FC<mpProps> = ({ mpCurrent, mpMax }) => {
	return (
		<div className="flex place-items-center prose">
			<div className={`h-12 w-12 rounded-2xl bg-secondary place-items-center flex`}>
				{/* <span className="text-info h-6 p-0 m-0 inline">MP</span> */}
				<span className="text-info w-12 text-center text-2xl font-bold m-0 p-0">{mpCurrent}</span>
			</div>
		</div>
	);
};

export default mpDial;
