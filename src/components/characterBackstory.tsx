"use client";

import React, { useState } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
}

export default function CharacterBackstory({ title, children }: Props) {
	const [display, setDisplay] = useState(false);
	const handleClick = () => {
		setDisplay(!display);
	};
	return (
		<div className="prose">
			<button onClick={handleClick} className="btn btn-soft w-full text-xl ">
				{title}
			</button>
			<div
				className={`${
					display ? "block" : "hidden"
				} text-stone-300 text-justify p-2 bg-base-300 border border-t-0 border-base-300 rounded-b-lg`}
			>
				{children}
			</div>
		</div>
	);
}
