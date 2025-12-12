import { Investigator } from "../types/investigator"
import { generateCustomSkills } from "../utils/characterHelpers"
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules"

const charCharacteristics = {
  strength: 50,
  constitution: 50,
  dexterity: 70,
  intelligence: 65,
  size: 80,
  power: 60,
  appearance: 35,
  education: 84,
}

const charAge = 45

const charNC = 40

const charSkills = generateCustomSkills(charCharacteristics,
  {
    "Arremessar": 40,
    "Biologia": 40,
    "Briga": 25,
    "Esquivar": Math.floor(charCharacteristics.dexterity / 2),
    "Farmácia": 35,
    "Encontrar": 55,
    "Intimidação": 20,
    "Língua (Nativa)": charCharacteristics.education,
    "Medicina": 75,
    "Nível de Crédito": charNC,
    "Persuasão": 40,
    "Pistolas": 30,
    "Primeiros Socorros": 70,
    "Psicanálise": 40,
    "Psicologia": 40
  },
  [
    {name:"Língua (Espanhol)", baseValue: 1, currentValue: 45, group: "Especiais / Mythos" },
    {name:"Língua (Francês)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos" },
    {name:"Língua (Latim)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos" }    
  ]
)



export const DR_ARTHUR_DIBDEN: Investigator = {
  id: 2,
  profile:{
    imageUrl: "/arthur-dibden.png",
    name: "Dr. Arthur Dibden",
    occupation: "Médico/Cirurgião",
    birthplace: "Inglaterra",
    residence: "Londres, Inglaterra",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: { current: 13, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 12, max: calculateMP(charCharacteristics)},
    sanity: {current: 54, max: charCharacteristics.power, initial: 54}
  },
  skills: charSkills,
  combat: [],
  backstory: {
    story: "Dibden serviu no Corpo Médico do Exército Real por mais de vinte anos. Um breve casamento com sua namorada de infância, Mary, terminou em tragédia quando ela morreu durante o parto. Após perder tanto seu amor quanto seu bebê, Dibden se afundou no trabalho. Apesar de suas experiências com os horrores da guerra moderna durante a Grande Guerra, seu desejo de viajar não diminuiu e, após o conflito, ele viajou através do Atlântico para as Américas. Embora inicialmente apreciando os pontos turísticos dos EUA, seu fascínio pela América do Sul o levou ao México, e depois para a Colômbia. Nos últimos meses, Dibden tem prestado assistência médica e auxílio na esteira da epidemia de gripe espanhola. Recentemente, ele viu notícias da imprensa sobre uma expedição que estava sendo organizada em Lima, Peru por um tal Augustus Larkin. Ansioso para conhecer o antigo Peru, ele contatou Larkin e garantiu um lugar na expedição por sua experiência médica de campo.",
    personalDescription: "Acima da altura média e bastante robusto, com cabelos grisalhos e rosto marcado pela idade, seus olhos têm um olhar assombrado.",
    traits: "Gentil, mas não gosta de quem fala besteira. Procura escapar dos horrores do passado.",
    ideologyBeliefs: "Tornou-se ateu depois de tudo o que viu e viveu.",
    treasuredPossessions: "Medalhão à volta do pescoço que contém uma foto da sua esposa Mary."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  }
}