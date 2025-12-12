import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";

const charCharacteristics = {
  strength: 55,
  constitution: 65,
  dexterity: 65,
  intelligence: 65,
  size: 65,
  power: 65,
  appearance: 35,
  education: 90, 
}

const charAge = 39

const charNC = 35

const charSkills = generateCustomSkills(charCharacteristics,
  {
    "Arqueologia": 30 + 5,
    "Briga": 60,
    "Consertos Mecânicos": 15,
    "Encontrar": 30 +20,
    "Escalar": 30,
    "Escutar": 40,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 13),
    "Furtividade": 35,
    "História": 75,
    "Lábia": 40,
    "Língua (Nativa)": charCharacteristics.education,
    "Mundo Natural": 20,
    "Natação": 40,
    "Nível de Crédito": charNC,
    "Ocultismo": 20,
    "Persuasão": 40,
    "Psicologia": 30,
    "Saltar": 35,
    "Usar Bibliotecas": 45 + 15,
  },
  [
    {name:"Língua (Espanhol)", baseValue:1, currentValue: 40, group: "Especiais / Mythos" },
    {name:"Língua (Grego)", baseValue:1, currentValue: 35, group: "Especiais / Mythos" },
    {name:"Língua (Alemão)", baseValue:1, currentValue: 50, group: "Especiais / Mythos" }
  ]
)

export const PROFESSORA_ELEANOR_BUTLER: Investigator = {
  id: 4,
  profile: {
    imageUrl: "/eleanor-butler.png",
    name: "Eleanor Butler",
    occupation: "Professora de História",
    birthplace: "Estados Unidos",
    residence: "Boston, Estados Unidos",
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
  combat: [
    {name: "Desarmado", damage: "1D3+DB", skillUsed: "Briga", attacks: 1, malfunction: 100, range: 0}

  ],
  backstory: {
    story: "Eleanor cresceu numa fazenda do meio oeste, ansiando por alguma mudança em sua vida monótona. Quando confrontada com a perspectiva de se casar com um garoto local, ela resolveu escapar do futuro que o destino lhe reservara e fugiu, embarcando às pressas em um trem para Nova York. Trabalhando nos empregos que conseguia, ainda encontrou tempo para seu passatempo favorito, ler livros de história na Biblioteca Pública de Nova York — uma paixão constante ao longo de sua vida que a levou a se formar e tornar-se historiadora. Na vida acadêmica, ela ainda precisa deixar a sua marca, um fato que muitas vezes perturba sua mente, pois ela vê outros recebendo fama enquanto seu trabalho persiste sem receber reconhecimento. Após ver o anúncio de Augustus  Larkin sobre sua expedição para encontrar uma pirâmide perdida no Peru, Eleanor resolveu fazer algo desafiador e inesperado. Contatando Larkin, ingressou na expedição e fez suas malas para o Peru em busca de fama e aventura.",
    personalDescription: "Americana branca, altura e compleição mediana, com cabelos castanhos à altura do ombro e olhos castanhos.",
    traits: "Ambiciosa; se enfurece quando tentam jogá-la contra a parede; tende a guardar rancor.",
    ideologyBeliefs: "Agarre as oportunidades que surgirem.",
    treasuredPossessions: "A caneta tinteiro dada a ela pelo noivo que abandonou no altar."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  },

}