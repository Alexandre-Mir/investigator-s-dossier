import { useState, forwardRef } from "react";

interface Props {
	currentSanity: number;
	onConfirm: (amount: number) => void;
	onClose?: () => void;
}

const SanityControlModal = forwardRef<HTMLDialogElement, Props>(
	({ onConfirm, onClose, currentSanity }, ref) => {
		const [lossValue, setLossValue] = useState(0);

		function addDiceRoll(sides: number) {
			const result = Math.floor(Math.random() * sides) + 1;

			setLossValue((prev) => prev + result);
		}

		return (
			<dialog ref={ref} className="modal " onClose={onClose}>
				<div className="modal-box flex flex-col place-items-center prose">
					<h3 className="text-lg">Perda de Sanidade</h3>
					<input
						className="input w-50"
						placeholder={`Insira um valor entre 1 e ${currentSanity}`}
						type="number"
						min={1}
						max={currentSanity}
						onChange={(e) => {
							setLossValue(Number(e.target.value));
						}}
					/>

					{/* Add collapse buttons */}
					<div className="flex flex-wrap justify-center gap-1 my-4 gap-2 ">
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(4)}>
							1d4
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(6)}>
							1d6
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(8)}>
							1d8
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(10)}>
							1d10
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(12)}>
							1d12
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(20)}>
							1d20
						</button>
						<button className="btn btn-soft w-16" onClick={() => addDiceRoll(100)}>
							1d100
						</button>
					</div>
					<div className="text-center bg-base-300 w-24 mb-2 text-primary text-3xl rounded">
						{lossValue}
					</div>
					<button className="btn btn-soft btn-info w-24" onClick={() => setLossValue(0)}>
						Limpar
					</button>

					<div className="modal-action">
						<button className="btn btn-error" formMethod="dialog" onClick={onClose}>
							Cancelar
						</button>
						<button
							className="btn btn-success"
							formMethod="dialog"
							onClick={() => {
								onConfirm(lossValue);
								setLossValue(0);
								if (onClose) onClose();
							}}
						>
							Confirmar
						</button>
					</div>
				</div>
			</dialog>
		);
	}
);

export default SanityControlModal;
