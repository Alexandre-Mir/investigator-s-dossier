import { SKILLS_BASE } from "@/src/constants/skillsBase"
import { Skills, Characteristics } from "../types/investigator"

function generateBase(characteristics: Characteristics): Skills[]{
  return SKILLS_BASE.map((skill) => {
    let initialValue = skill.baseValue;
    if (skill.name === "Esquivar") initialValue = Math.floor(characteristics.destreza / 2);
    if (skill.name === "Língua (Nativa)") initialValue = characteristics.educação;

    return{
      ...skill,
      currentValue: initialValue,
      toUpgrade: false
    }
  })
}

export function generateCustomSkills(
  characteristics: Characteristics, 
  customSkills: Record<string, number>, 
  extraSkills: Skills[] = []
): Skills[] {
  // Default base
  let finalList = generateBase(characteristics).map((skill) => {
    const customValue = customSkills[skill.name];
    if (customValue !== undefined) {
      return {...skill, currentValue: customValue};
    }
    return skill;
  });
  // Add extra skills
  const formatedExtras = extraSkills.map(extra => ({
    ...extra,

    currentValue: extra.currentValue ?? extra.baseValue,
    toUpgrade: extra.toUpgrade ?? false
  }));

  finalList = [...finalList, ...formatedExtras];
  // Reorder alphabetically
  finalList.sort((a, b) => a.name.localeCompare(b.name));

  return finalList; 
}