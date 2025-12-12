export type RollStatus = "Sucesso Crítico!" | "Sucesso Extremo!" | "Sucesso Difícil!" | "Sucesso!" | "Falha!" | "Desastre!";

export interface RollResult {
  attribute: string;
  target: number;
  rolled: number;
  status: RollStatus;
  color: string;
  damageValue?: number;
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

  return {
    attribute: name,
    target: targetValue,
    rolled: roll,
    status,
    color
  };
}

export const calculateDamage = ( formula:string, damageBonus: string): number => {
  const formulaWithDB = formula.replace("DB", damageBonus)
  const splitDB = formulaWithDB.split("+")

  let totalDamage = 0

  for (const part of splitDB) {
    if(part.includes("D")){
      const diceParts = part.split("D");

      const count = Number(diceParts[0]);
      const sides = Number(diceParts[1]);

      for(let i = 0; i < count; i++) {
        const result = Math.floor(Math.random() * sides) + 1

        totalDamage = totalDamage + result
      }
    } else {
      totalDamage = totalDamage + Number(part)
    }
  }

  return totalDamage
}