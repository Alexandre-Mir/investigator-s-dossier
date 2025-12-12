import { Investigator } from "../types/investigator"
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";

const charCharacteristics = {
  strength: 85,
  constitution: 70,
  dexterity: 70,
  intelligence: 70,
  size: 70,
  power: 50,
  appearance: 60,
  education: 45,
}

const charAge = 26

const charNC = 10

const charSkills = generateCustomSkills(charCharacteristics,
  {
    "Arremessar": 50,
    "Briga": 70,
    "Engenharia": 70,
    "Consertos Mecânicos": 60,
    "Dirigir Automóveis": 40,
    "Encontrar": 40 + 20,
    "Escalar": 40,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 15),
    "Escutar": 30 + 15,
    "Furtividade": 40,
    "Intimidação": 60,
    "Lábia": 45,
    "Língua (Nativa)": charCharacteristics.education,
    "Natação": 50,
    "Nível de Crédito": charNC,
    "Pistolas": 60,
    "Psicologia": 30,
    "Rifles": 50,
    "Saltar": 40
  }
)

export const ARCHIBALD_WASHINGTON: Investigator = {
  id: 3,
  profile: {
    imageUrl: "/archibald-washington.png",
    name: "Archibald Washington",
    occupation: "Engenheiro",
    birthplace: "Estados Unidos",
    residence: "Chicago, Estados Unidos",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: { current: 14, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 10, max: calculateMP(charCharacteristics)},
    sanity: {current: 50, max: charCharacteristics.power, initial: 50}
  },
  skills: charSkills,
  combat: [
    {name: "Desarmado", damage: "1D3+DB", skillUsed: "Briga", attacks: 1, malfunction: 100, range: 0},
    {name: "Revólver .38", damage: "1D10", skillUsed: "Pistolas", attacks: 1, malfunction: 100, range: 15, maxAttacks: 3, ammo: 6}

  ],
  backstory: {
    story: "Archibald passou sua juventude em Boston, se metendo em problemas nas ruas e com a lei; todos acreditavam que ele passaria a maior parte de sua vida dentro de uma prisão, mas isso foi antes dele descobrir o boxe. Direcionando toda a sua energia para o esporte, ele se concentrou em ganhar lutas e entrou em rápida ascensão para logo se tornar um verdadeiro lutador. No entanto, a sorte nunca esteve ao seu lado. Na véspera da luta pelo grande título, ele foi “aconselhado” a desistir ou sua família enfrentaria as consequências. Ele perdeu, mas sempre se odiou por isso. Guiado por seu senso inato de justiça, ele matou o mafioso que havia ameaçado sua família e fugiu de Boston, juntando-se ao exército para lutar na guerra, onde foi treinado em engenharia. Desde que regressou da França, trabalhou como mecânico, sem nunca conseguir um trabalho melhor como engenheiro. Archibald anseia por coisas empolgantes, desesperado como está para se libertar do  trabalho pesado e do racismo diário que precisa aturar. Lendo que uma expedição no Peru precisava de um engenheiro, ele contatou o líder da expedição, Augustus Larkin, e ofereceu seus serviços. Usando todas as suas escassas poupanças, Archibald comprou uma passagem e partiu para Lima, no Peru. Talvez lá ele encontre o significado que procura em sua vida.",
    personalDescription: "Afro-americano, com porte robusto e forte; seu rosto bonito mascara sua carreira no boxe.",
    ideologyBeliefs: "Odeia valentões e gente que pensa que é superior aos outros; tem um forte senso de justiça e procura corrigir as coisas (mesmo que isso signifique operar por fora da lei).",
    treasuredPossessions: "Fotografia de sua falecida mãe, que ele guarda na carteira."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  }
}