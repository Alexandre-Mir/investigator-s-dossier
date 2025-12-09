export type RollStatus = "Sucesso Crítico!" | "Sucesso Extremo!" | "Sucesso Difícil!" | "Sucesso!" | "Falha!" | "Desastre!";

export interface RollResult {
  attribute: string;
  target: number;
  rolled: number;
  status: RollStatus;
  color: string;
}

function triggerHapticFeedback(status: RollStatus) {
  // Verificação de segurança: O código só roda no navegador e se o hardware suportar
  if (typeof navigator === "undefined" || !navigator.vibrate) return;

  if (status === "Desastre!") {
    // Vibração longa e pesada apenas para o pior cenário
    navigator.vibrate(500);
  } else {
    // Vibração curta (igual ao "Sucesso") para todos os outros casos
    // Inclui: Crítico, Extremo, Difícil, Sucesso Normal e Falha
    navigator.vibrate(50);
  }
}

export function rollD100(name: string, targetValue: number): RollResult {
  const roll = Math.floor(Math.random() * 100) + 1;
  
  let status: RollStatus = "Falha!";
  let color = "text-error";

  // Regra de Desastre (Fumble): < 50 desastre é 96+, >= 50 desastre é 100
  const isFumble = targetValue < 50 ? roll >= 96 : roll === 100;

  if (roll === 1) {
    status = "Sucesso Crítico!";
    color = "text-warning font-extrabold"; 
  } else if (isFumble) {
    status = "Desastre!";
    color = "text-error font-extrabold";
  } else if (roll <= Math.floor(targetValue / 5)) {
    status = "Sucesso Extremo!";
    color = "text-success font-bold";
  } else if (roll <= Math.floor(targetValue / 2)) {
    status = "Sucesso Difícil!";
    color = "text-success font-bold";

  } else if (roll <= targetValue) {
    status = "Sucesso!";
    color = "text-success";
  }

  triggerHapticFeedback(status);

  return {
    attribute: name,
    target: targetValue,
    rolled: roll,
    status,
    color
  };

  
}