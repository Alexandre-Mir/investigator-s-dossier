import { Characteristics } from "../types/investigator";

export function calculateMov(characteristics: Characteristics, age: number): number {
  const { strength, dexterity, size } = characteristics;

  let baseMov = 8;

  if (strength < size && dexterity < size){
    baseMov = 7;
  } else if (strength > size && dexterity > size) {
    baseMov = 9;
  }

  let agePenalty = 0;

  if (age >= 40 && age < 50) {
    agePenalty = 1;
  } else if (age >= 50 && age < 60){
    agePenalty = 2;
  } else if (age >= 60 && age < 70){
    agePenalty = 3;
  } else if (age >= 70 && age < 80){
    agePenalty = 4;
  } else if (age >= 80){
    agePenalty = 5;
  }

  const finalMov = baseMov - agePenalty;

  return Math.max(0, finalMov);
}

export function calculateBuild(characteristics: Characteristics): number {
  const total = characteristics.strength + characteristics.size;

  if (total <= 64) return -2;
  if (total <= 84) return -1;
  if (total <= 124) return 0;
  if (total <= 164) return 1;
  if (total <= 204) return 2;

  const excess = total - 204;

  const stepsExtras = Math.ceil(excess / 80);
  return 2 + stepsExtras;
}

export function calculateHP(characteristics: Characteristics): number {
  const total = characteristics.size + characteristics.constitution;

  const maxHP = Math.floor(total / 10);

  return maxHP;
}

export function calculateMP(characteristics: Characteristics): number {
  const power = characteristics.power;

  const maxMP = Math.floor(power / 5);

  return maxMP;
}

export function calculateDamageBonus(characteristics: Characteristics): string {
  const total = characteristics.strength + characteristics.size;

  if (total <= 64) return "-2";
  if (total <= 84) return "-1";
  if (total <= 124) return "0";
  if (total <= 164) return "+1D4";
  if (total <= 204) return "+1D6";

  const excess = total - 204;

  const extraDices = Math.ceil(excess / 80);

  const totalDices = 1 + extraDices;

  return `+${totalDices}D6`;
  
}