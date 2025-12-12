import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";

const charCharacteristics = {
  strength: 75,
    constitution: 65,
    dexterity: 65,
    intelligence: 65,
    size: 80,
    power: 60,
    appearance: 75,
    education: 65
}

const charAge = 29

const charNC = 20

const charSkills = generateCustomSkills(charCharacteristics, 
  {
    "Arremessar": 60,
    "Encontrar": 55 + 10,
    "Escalar": 50,
    "Escutar": 35 + 20,
    "Furtividade": 60,
    "Intimidação": 55,
    "Língua (Nativa)": charCharacteristics.education,
    "Nível de Crédito": charNC,
    "Briga": 65,
    "Espadas": 60,
    "Rifles": 55,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 33),
    "Psicologia": 10 + 10
  },
  [
    { name: "Língua (Árabe)", baseValue: 1, currentValue: 31, group: "Especiais / Mythos" },
    { name: "Língua (Espanhol)", baseValue: 1, currentValue: 31 + 10, group: "Especiais / Mythos" },
    { name: "Sobrevivência (Deserto)", baseValue: 10, currentValue: 30, group: "Especiais / Mythos" }

  ]
)


export const PRANIT_SINGH_DHILLON: Investigator = {
  id: 9,
  profile: {
    imageUrl: "/pranit-singh-dhillon.png",
    name: "Pranit Singh Dhillon",
    occupation: "Ex-Soldado",
    birthplace: "Índia",
    residence: "Bombaim, Índia",
    age: charAge,
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: {current: 14, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 12, max: calculateMP(charCharacteristics)},
    sanity: {current: 60, max: charCharacteristics.power, initial: 60}
  },
  skills: charSkills,
  combat: [
    {name: "Desarmado", damage: "1D3+DB", skillUsed: "Briga", attacks: 1, malfunction: 100, range: 0},
    {name: "Kirpan (faca)", damage: "1D4+2+DB", skillUsed: "Briga", attacks: 1, malfunction: 100, range: 0},
    {name: "Sabre (espada)", damage: "1D8+1+DB", skillUsed: "Espadas", attacks: 1, malfunction: 100, range: 0},
    {name: "Chakram (arremessado)", damage: "1D3+1D2", skillUsed: "Arremessar", attacks: 1, malfunction: 100, range: 40, ammo: 1},
    {name: "Rifle Martini-Henry .45", damage: "1D8+3+1D6", skillUsed: "Rifles", attacks: 1, malfunction: 100, range: 80, maxAttacks: 3, ammo: 1},
  ],
  backstory: {
    story: "Nascido e criado na cidade punjabi de Ferozepore, a família de Pranit tem uma longa história de serviço militar; primeiro para com os marajás do Império Sikh, e depois para os britânicos após a queda do Império. Desejoso de seguir os passos de seus antepassados, Pranit juntou-se aos Sikhs de Ferozepore do 14o Príncipe de Gales assim que pôde. Durante a Grande Guerra, seu batalhão serviu no Egito, Gallipoli, Pérsia e Mesopotâmia (onde o heroísmo dos soldados Sikh lhes rendeu o apelido de “Leões Negros”). Sendo um dos poucos a sobreviver ileso ao banho de sangue que foi a Terceira Batalha de Krithia (Gallipoli, 1915), Pranit foi finalmente dispensado por invalidez devido a uma lesão pouco antes do Armistício. Com dificuldade em se estabelecer na vida civil, Pranit decidiu dar bom uso às suas habilidades militares e agora viaja pelo mundo como um soldado contratado. Seu contrato anterior como guarda em uma  das minas de prata do Peru tinha acabado de expirar, então o anúncio da expedição de Augustus Larkin, que partiria em busca de encontrar uma pirâmide perdida, não podia ter vindo em hora melhor. Ao ler seu histórico de serviço, Larkin aceitou Pranit como segurança para a próxima expedição.",
    personalDescription: "Indiano, alto e bonito, com olhos penetrantes, uma barba desgrenhada e um turbante azul pálido.",
    traits: "Orgulhoso e leal àqueles que ele considera seus companheiros.",
    ideologyBeliefs: "Deus é um só, e todos os homens (e mulheres) são iguais.",
    treasuredPossessions: "Os cinco Ks (os artigos de sua fé), incluindo seu kangha (pente de marfim), kara (pulseira de aço) e kirpan (faca cerimonial)."
  },
  inventory: {
    gearPossessions: [],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50)
  }
}