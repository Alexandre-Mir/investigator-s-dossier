"use client";

import { forwardRef } from "react";
import { RollResult } from "../utils/diceLogic";

interface Props {
	result: RollResult | null;
	onClose?: () => void;
}

const ResultModal = forwardRef<HTMLDialogElement, Props>(({ result, onClose }, ref) => {
	return (
		<dialog ref={ref} className="modal" onClose={onClose}>
			<div className="modal-box text-center">
				{result && (
					<article className="prose flex flex-col place-items-center">
						<div className={`text-3xl uppercase mb-2 ${result.color}`}>{result.status}</div>
						<div className="stats bg-base-200">
							<div className="stat w-24">
								<div className="stat-title text-primary uppercase font-bold">
									{result.attribute.substring(0, 3)}
								</div>
								<div className="stat-value text-primary">{result.target}</div>
							</div>

							<div className="stat w-24">
								<div className={`stat-title uppercase font-bold ${result.color}`}>Dado</div>
								<div className={`stat-value ${result.color}`}>{result.rolled}</div>
							</div>
							{result.damageValue && result.damageValue > 0 && (
								<div className="stat w-24">
									<div className="stat-title text-error uppercase font-bold">Dano</div>
									<div className="stat-value text-error">{result.damageValue}</div>
								</div>
							)}
						</div>
					</article>
				)}

				<div className="modal-action justify-center mt-4">
					<form method="dialog">
						<button className={`btn btn-soft  ${result?.color}`}>Fechar</button>
					</form>
				</div>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button onClick={onClose}>close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
