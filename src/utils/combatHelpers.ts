import { WEAPONS_BASE } from "../data/weaponsBase";
import { Skills, Combat, Characteristics } from "../types/investigator";
import { calculateDamageBonus } from "./rules";

export function generateWeapons (
  weaponsKeys: string[],
  skillsList: Skills[],
  characteristics: Characteristics
): Combat[] {
  const db = calculateDamageBonus(characteristics);

  return weaponsKeys.map((key) => {
    const base = WEAPONS_BASE[key];

    if (!base) return null;

    const skillName = base.skillUsed as unknown as string;
    const skillFound = skillsList.find(s => s.name === skillName);
    const skillValue = skillFound ? (skillFound.currentValue || skillFound.baseValue) : 0;
    
    let finalDamage = base.damage.replace(" + DB", `${db}`);
    if (db === "0"){
      finalDamage = finalDamage.replace(" 0", "").trim();
    }

    return {
      name: base.name,
      skillUsed: {name: skillName, value: skillValue},
      damage: finalDamage,
      attacks: base.attacks,
      range: String(base.range),
      ammo: String(base.ammo) || "0",
      malfunction: base.malfunction,
      damageBonus: db
    };
  }).filter((w): w is Combat => w !== null);

}