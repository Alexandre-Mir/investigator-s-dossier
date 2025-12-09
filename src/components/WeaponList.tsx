"use client";

import { rollD100, RollResult } from "../utils/diceLogic";
import { Combat } from "@/src/types/investigator";

interface Props {
	weapons: Combat[];
	onRoll: (result: RollResult) => void;
}

export default function WeaponList({ weapons, onRoll }: Props) {
	const handleAttack = (weaponName: string, skillValue: number) => {
		const result = rollD100(weaponName, skillValue);

		onRoll(result);
	};

	return (
		<div className="bg-base-100 rounded-lg space-x-2">
			{weapons?.map((weapon, index) => {
				const ammoDisplay = weapon.ammo && weapon.ammo !== "0" ? weapon.ammo : null;

				return (
					<div key={index} className="btn btn-soft">
						<div>
							<div>
								<h3>
									{weapon.name}
									{weapon.attacks > 1 && <span>{weapon.attacks} atk</span>}
								</h3>

								<div>
									<span>{weapon.range || "Toque"}</span>

									{ammoDisplay && (
										<span>
											<span>i</span>
											{ammoDisplay}
										</span>
									)}

									{weapon.malfunction < 100 && <span>Malf: {weapon.malfunction}</span>}
								</div>
							</div>
							<div>
								<span>{weapon.damage}</span>
								<button onClick={() => handleAttack(weapon.name, weapon.skillUsed?.value)}>
									Rolar
									<span>({weapon.skillUsed?.value}%)</span>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
