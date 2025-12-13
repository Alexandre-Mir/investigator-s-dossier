import { useState } from "react";
import { RollResult } from "../utils/diceLogic";
import { History } from "lucide-react";

interface Props {
	rollResultArray: RollResult[];
}

export default function RollHistoryList({ rollResultArray }: Props) {
	const [activeTab, setactiveTab] = useState(0);

	return (
		<>
			<div
				className="tabs mx-2 mt-2 bg-base-200 p-1 border border-b-0 rounded-t-lg border-base-300 "
				role="tablist"
			>
				{/* ABA 0: Histórico de Rolagens */}
				<a
					role="tab"
					className={`tab rounded-lg m-1 ${activeTab === 0 ? "bg-base-100 text-primary" : ""}`}
					onClick={() => setactiveTab(0)}
				>
					<History size={18} />
				</a>
			</div>
			<div className="mx-2 border border-t-0 border-base-300 bg-base-200 pb-2 rounded-b-lg px-2">
				{activeTab === 0 && (
					<div className="h-72 overflow-y-auto overflow-x-hidden bg-base-100 rounded-lg">
						<table className="table">
							<thead>
								<tr>
									<th>Teste</th>
									<th>Alvo</th>
									<th>Rolagem</th>
								</tr>
							</thead>
							<tbody>
								{rollResultArray.map((rollResult) => {
									return (
										<tr key={rollResult.rolled} className={`${rollResult.color}`}>
											<th>{rollResult.attribute}</th>
											<th>{rollResult.target}</th>
											<th>{rollResult.rolled}</th>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</>
	);
}
