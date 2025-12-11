import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";
import { generateWeapons } from "../utils/combatHelpers";

const charCharacteristics = {
  strength: 70,
  constitution: 70,
  dexterity: 70,
  intelligence: 50,
  size: 60,
  power: 65,
  appearance: 50,
  education: 25,
}

const charAge = 36

const charNC = 25

const charSkills = generateCustomSkills(charCharacteristics, 
  {
    "Arremessar": 30,
    "Cavalgar": 60,
    "Consertos Mecânicos": 40,
    "Encontrar": 30 + 10,
    "Escalar": 25,
    "Escutar": 30,
    "Furtividade": 40,
    "Intimidação": 40,
    "Língua (Nativa)": charCharacteristics.education,
    "Mundo Natural": 30,
    "Navegação": 40,
    "Nível de Crédito": charNC,
    "Psicologia": 25,
    "Rastrear": 30,
    "Saltar": 40,
    "Briga": 50,
    "Pistolas": 45,
    "Rifles": 60,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2))
  }, 
  [
    { name:"Sobrevivência (Deserto)", baseValue: 1, currentValue: 30 + 25, group: "Especiais / Mythos"},
    { name:"Sobrevivência (Selva)", baseValue: 1, currentValue: 15, group: "Especiais / Mythos"},
    { name:"Língua (Espanhol)", baseValue: 1, currentValue: 11 + 15, group: "Especiais / Mythos"},
  ]
)

export const PERRY_ASTOR: Investigator = {
  id: 6,
  profile: {
    imageUrl: "/perry-astor.png",
    name: "Perry Astor",
    occupation: "Explorador",
    birthplace: "Canadá",
    residence: "Toronto, Canadá",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: { current: 13, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 13, max: calculateMP(charCharacteristics)},
    sanity: {current: 65, max: charCharacteristics.power, initial: 65}
  },
  skills: charSkills,
  combat: generateWeapons(["Unarmed", ".45 Caliber Revolver", ".30-06 Bolt-Action Rifle"], charSkills, charCharacteristics),
  backstory: {
    story: "Quando jovem, Perry vivia para sentir o vento correndo pelos seus cabelos enquanto cavalgava a uma velocidade vertiginosa em torno do rancho de seu pai. “Duro de roer”, era como o pai costumava descrevê-lo. Ficar com a cara enfiada em livros não era o estilo de Perry; ele preferia sujar as mãos de lama e sangue. Apesar dos desejos de seu pai, tinha curiosidade e empolgação demais para ficar na fazenda, desejava aventura. Aos 17 anos, Perry partiu e começou a descobrir o mundo. Ao longo dos anos, viajou extensivamente pela América do Norte e do Sul, trabalhando em todos os tipos de empregos para pagar suas despesas. Recentemente, enquanto dava apoio a uma expedição a Tiwanaku no oeste da Bolívia, Perry soube da proposta de Augustus Larkin de procurar uma pirâmide perdida no Peru. Já fazendo seus planos, ele escreveu ao organizador dizendo  que não havia ninguém mais qualificado para dar apoio ao à empreitada e disse a Larkin para esperá-lo em Lima. Perry se apressou pela costa peruana (quase 1.500 km) até chegar a Lima, bem a tempo de partir junto com a expedição.",
    personalDescription: "Um canadense branco, alto, com feições desgastadas pelo tempo e um cabelo curto e indisciplinado que costuma esconder sob o chapéu.",
    traits: "Desejo de viajar: irritável quando fica parado por muito tempo. Às vezes se enraivece rápido demais.",
    ideologyBeliefs: "Só se aprende sujando as mãos*.",
    treasuredPossessions: "'Mary', a faca Bowie dada a ele por seu pai.",
    observations: "* Embora não saiba, Perry sofre de dislexia: a causa de sua antipatia por livros e leitura."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  }

}