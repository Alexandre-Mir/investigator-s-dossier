import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";
import { generateWeapons } from "../utils/combatHelpers";

const charCharacteristics = {
  strength: 75,
    constitution: 55,
    dexterity: 50,
    intelligence: 80,
    size: 70,
    power: 55,
    appearance: 75,
    education: 75,
}

const charAge = 26

const charNC = 70

const charSkills = generateCustomSkills(charCharacteristics, 
  {
    "Arqueologia": 60,
    "Arremessar": 35,
    "Avaliação": 30,
    "Charme": 40,
    "Consertos Mecânicos": 35,
    "Encontrar": 50 + 10,
    "Escalar": 30,
    "Escutar": 40,
    "Furtividade": 30,
    "História": 55,
    "Intimidação": 30,
    "Língua (Nativa)": charCharacteristics.education,
    "Mundo Natural": 25,
    "Navegação": 35,
    "Nível de Crédito": charNC,
    "Persuasão": 30,
    "Saltar": 30,
    "Usar Bibliotecas": 40 + 5,
    "Briga": 30,
    "Pistolas": 30,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 10 + 15)
  },
  [
    { name:"Língua (Latim)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos"},
    { name:"Língua (Espanhol)", baseValue: 1, currentValue: 21, group: "Especiais / Mythos"},
  ]
)

export const WINSTON_GREENE: Investigator = {
  id: 5,
  profile: {
    imageUrl: "/winston-greene.png",
    name: "Winston Greene",
    occupation: "Arqueólogo",
    birthplace: "Estados Unidos",
    residence: "Nova York, Estados Unidos",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: { current: 12, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 11, max: calculateMP(charCharacteristics)},
    sanity: {current: 55, max: charCharacteristics.power, initial: 55}
  },
  skills: charSkills,
  combat: generateWeapons(["Unarmed", ".38 Automatic Pistol"], charSkills, charCharacteristics),
  backstory: {
    story: "Winston sempre teve uma vida cosmopolita, criado por pais abastados em São Francisco. Ele nunca precisou lutar para encontrar seu caminho, desfrutou de uma educação privada longe das realidades mais duras da vida. Apesar de nascer em berço de ouro, Winston sempre olhou para o horizonte com um desejo ardente de desafiar a si mesmo, e também de descobrir quem ele realmente era. Foi apenas na universidade que descobriu sua paixão pela história e pelo mundo antigo. Cansado de ser excluído das sociedades universitárias por causa de sua cor, ele descobriu que mergulhar no passado parecia fornecer-lhe um meio para escapar do mundo moderno e de seus males. Após a graduação, Winston procurou juntar-se a inúmeras pesquisas arqueológicas, mas foi recusado vez após outra. Sabendo que suas credenciais eram iguais, se não  melhores, do que a dos outros graduados, ele ficou furioso e deprimido, pois parecia que nunca conseguiria provar o seu valor e fazer seu nome no campo que escolheu. Perto de desistir de seus sonhos, ele encontrou um artigo de notícias sobre um homem chamado Augustus Larkin que estava montando uma expedição para encontrar uma pirâmide perdida nas profundezas do Peru. Ao entrar em contato com Larkin, Winston ficou encantado por ser aceito sem reservas. Finalmente, parecia que o destino tinha permitido uma oportunidade, que ele agora pretende agarrar com todas as suas strengths.",
    personalDescription: "Afro-americano; compleição magra e rígida, com feições bonitas.",
    traits: "Ambicioso, anseia por fazer seu próprio nome, intolerante com valentões e racistas.",
    ideologyBeliefs: "Um cristão com grande senso de certo e errado.",
    treasuredPossessions: "Aa Bíblia de bolso de sua mãe."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 50,
    cash: Math.floor(charNC * 5),
    assets: Math.floor(charNC * 500),
  }
}