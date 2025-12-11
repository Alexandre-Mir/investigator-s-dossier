import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";
import { generateWeapons } from "../utils/combatHelpers";

const charCharacteristics = {
  strength: 55,
    constitution: 60,
    dexterity: 70,
    intelligence: 65,
    size: 50,
    power: 70,
    appearance: 45,
    education: 85
}

const charAge = 48

const charNC = 31

const charSkills = generateCustomSkills(charCharacteristics, 
  {
    "Avaliação": 30,
    "Direito": 20,
    "Encontrar": 30 + 20,
    "Intimidação": 30,
    "Língua (Nativa)": charCharacteristics.education,
    "Navegação": 30,
    "Nível de Crédito": charNC,
    "Ocultismo": 20,
    "Persuasão": 40,
    "Psicologia": 40 + 10,
    "Usar Bibliotecas": 60,
    "Briga": 25,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 5)
  },
  [
    { name:"Língua (Árabe)", baseValue: 1, currentValue: 40, group: "Especiais / Mythos"},
    { name:"Língua (Cuneiforme)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos"},
    { name:"Língua (Espanhol)", baseValue: 1, currentValue: 30 + 20, group: "Especiais / Mythos"},
    { name:"Língua (Grego)", baseValue: 1, currentValue: 50, group: "Especiais / Mythos"},
    { name:"Língua (Inglês)", baseValue: 1, currentValue: 60, group: "Especiais / Mythos"},
  ]
)


export const JOHAN_BRAUN: Investigator = {
  id: 8,
  profile: {
    imageUrl: "/johan-braun.png",
    name: "Johan Braun",
    occupation: "Professor de línguas",
    birthplace: "Alemanha",
    residence: "Berlim, Alemanha",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: { current: 11, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 14, max: calculateMP(charCharacteristics)},
    sanity: {current: 70, max: charCharacteristics.power, initial: 70}
  },
  skills: charSkills,
  combat: generateWeapons(["Unarmed"], charSkills, charCharacteristics),
  backstory: {
    story: "A mãe de Johan era bibliotecária e seu pai, um professor de línguas, o que pode explicar seu grande amor por livros e idiomas. Ao longo da infância, o jovem esteve rodeado de livros sobre ciência, história, mitos e muito mais. Sempre o melhor de sua classe, Johan seguiu carreira acadêmica, lendo línguas e clássicos na Universidade de Würzburg, na Baviera. Foi enquanto lecionava em sua alma mater que a Grande Guerra eclodiu, e Johan foi convocado para servir na Frente Ocidental. Sobrevivendo aos horrores das trincheiras, deixou a Europa o mais rápido que pôde e foi para a América para assumir um posto na Universidade da Califórnia, em Berkeley. Apesar de um começo promissor, Johan nunca sentiu que se encaixava no estilo de vida americano e começou a ficar desiludido com a academia. Foi com bastante interesse que ele leu sobre o ressurgimento de escavações arqueológicas que ocorreu durante a guerra, e descobriu uma entrevista com um homem chamado Augustus Larkin, que propunha montar uma expedição para o interior do Peru a fim de procurar por uma pirâmide perdida; a entrevista terminava com Larkin convocando especialistas e  aventureiros para entrar em contato com ele. Sem perder tempo, Johan escreveu para Larkin e garantiu um lugar na equipe; Larkin sentiu que seu conhecimento de línguas seria útil. A última carta de Larkin disse a Johan para se encontrar com ele e os outros membros da expedição em Lima.",
    personalDescription: "Alemão branco,baixo e um pouco acima do peso,com cabelo apresentando entradas, barba e um bigode proeminente.",
    traits: "Costuma buscar cobertura quando ouve um barulho alto (devido a seu tempo na guerra); uma sede de conhecimento distinta.",
    ideologyBeliefs: "A guerra foi um erro terrível e a humanidade nunca mais deve sucumbir a esses instintos básicos — devemos trabalhar juntos para construir um futuro melhor, livre dos horrores do passado.",
    treasuredPossessions: "O cantil de prata que salvou a sua vida: a bala inglesa ainda está firmemente alojada no metal."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  },
}