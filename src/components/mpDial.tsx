interface mpProps {
	mpCurrent: number;
	mpMax: number;
}

const mpDial: React.FC<mpProps> = ({ mpCurrent, mpMax }) => {
	return (
		<div className="flex place-items-center mt-2">
			<span className="relative z-2 left-4 inline text-lg font-black font-mono transition-colors text-info opacity-40">
				MP
			</span>
			<progress
				className="absolute progress h-12 w-12 rotate-270 text-secondary"
				value={mpCurrent}
				max={mpMax}
			></progress>
			<p></p>
		</div>
	);
};

export default mpDial;
