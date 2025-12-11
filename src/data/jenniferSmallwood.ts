import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";
import { generateWeapons } from "../utils/combatHelpers";

const charCharacteristics = {
  strength: 35,
    constitution: 70,
    dexterity: 70,
    intelligence: 65,
    size: 50,
    power: 60,
    appearance: 55,
    education: 60,
}

const charAge = 36

const charNC = 80

const charSkills = generateCustomSkills(charCharacteristics, {
    "Cavalgar": 35,
    "Charme": 50,
    "Disfarce": 40,
    "Encontrar": 30 + 20,
    "Escalar": 25,
    "Escutar": 30,
    "Furtividade": 30,
    "Intimidação": 30,
    "Língua (Nativa)": charCharacteristics.education,
    "Natação": 25,
    "Navegação": 30,
    "Nível de Crédito": charNC,
    "Psicologia": 20 + 10,
    "Saltar": 35,
    "Briga": 30,
    "Espingardas": 40 + 10,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 10 + 10)
  },
  [
    { name:"Língua (Francês)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos"},
    { name:"Arte/Ofício (Dança)", baseValue: 1, currentValue: 35, group: "Especiais / Mythos"},
  ]
)

export const JENNIFER_SMALLWOOD: Investigator = {
  id: 7,
  profile: {
    imageUrl: "/jennifer-smallwood.png",
    name: "Jennifer Smallwood",
    occupation: "Diletante",
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
    hitPoints: { current: 12, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 12, max: calculateMP(charCharacteristics)},
    sanity: {current: 60, max: charCharacteristics.power, initial: 60}
  },
  skills: charSkills,
  combat: generateWeapons(["Unarmed", "12 Gauge Shotgun (2C)"], charSkills, charCharacteristics),
  backstory: {
    story: "Jennifer vem de uma família inglesa cuja riqueza foi acumulada durante o início do século XIX, através de empreendimentos de transporte. Seus pais se perderam no mar em 1888, enquanto estavam a bordo do SS Vaitarna a caminho de Bombaim, deixando Jennifer e sua irmã mais velha Valerie como herdeiras da fortuna Smallwood. Enquanto Valerie preferiu ficar na casa da família em Hampshire, Jennifer fez as malas e decidiu viajar para o Novo Mundo. A decisão prejudicou seu relacionamento com a irmã, que acreditava ser o papel de uma dama ficar em sua terra e encontrar um marido adequado, não sair se metendo com climas estrangeiros. Depois de festejar em Nova York e na Califórnia, Jennifer cansou-se das intermináveis danças e filas de homens tentando atrair seu interesse. Ela resolveu que havia muito mais para ver e experimentar e começou a procurar (como ela mesma disse) por “algo diferente”. Vendo um artigo sobre uma expedição que estava sendo montada no Peru em busca de pessoas com um desejo por aventura, Jennifer contatou o chefe do projeto,  um tal Augustus Larkin, que lhe contou sobre seu objetivo de encontrar uma pirâmide perdida. A oferta de doar mil dólares para a expedição foi aceita de bom grado por Larkin. Com os planos de viagem montados, a Jennifer partiu para Lima e para o seu destino.",
    personalDescription: "Inglesa branca, alta e esbelta, com cabelos escuros curtos em um penteado elegante.",
    traits: "Aventureira, imprudente e sempre em movimento.",
    ideologyBeliefs: "Às vezes é preciso quebrar alguns ovos para fazer uma omelete (ou seja, resolver as coisas). Criação católica.",
    treasuredPossessions: "Carteira de viagem contendo uma fotografia de sua família em tempos felizes; um colar de ouro dado pelo seu falecido pai."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 50,
    cash: Math.floor(charNC * 5),
    assets: Math.floor(charNC * 500),
  }
}