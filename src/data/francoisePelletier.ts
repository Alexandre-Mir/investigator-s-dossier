import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";

const charCharacteristics = {
  strength: 55,
    constitution: 60,
    dexterity: 65,
    intelligence: 70,
    size: 55,
    power: 70,
    appearance: 55,
    education: 65
}

const charAge = 33

const charNC = 31

const charSkills = generateCustomSkills(charCharacteristics, 
  {
    "Arqueologia": 1 + 19,
    "Charme": 65,
    "Química": 40,
    "Encontrar": 65,
    "Escutar": 20 + 20,
    "Língua (Nativa)": charCharacteristics.education,
    "Nível de Crédito": charNC,
    "Persuasão": 50,
    "Pistolas": 20 + 11,
    "Psicologia": 60,
    "Briga": 25,
    "Esquivar": Math.floor((charCharacteristics.dexterity / 2) + 8)
  },
  [
    { name:"Arte/Ofício (Fotografia)", baseValue: 1, currentValue: 65, group: "Especiais / Mythos"},
    { name:"Língua (Espanhol)", baseValue: 1, currentValue: 50, group: "Especiais / Mythos"},
    { name:"Língua (Inglês)", baseValue: 1, currentValue: 30, group: "Especiais / Mythos"},
  ]
)


export const FRANCOISE_PELLETIER: Investigator = {
  id: 10,
  profile: {
    imageUrl: "/francoise-pelletier.png",
    name: "Françoise Pelletier",
    occupation: "Fotógrafa",
    birthplace: "França",
    residence: "Paris, França",
    age: charAge
  },
  characteristics: {
    ...charCharacteristics,
    move: calculateMov(charCharacteristics, charAge),
    build: calculateBuild(charCharacteristics)
  },
  status: {
    hitPoints: {current: 11, max: calculateHP(charCharacteristics)},
    magicPoints: {current: 14, max: calculateMP(charCharacteristics)},
    sanity: {current: 70, max: charCharacteristics.power, initial: 70}
  },
  skills: charSkills,
  combat: [],
  backstory: {
    story: "Filha de um adido naval, Françoise nunca tinha vivido em um lugar por tempo o bastante para considerá-lo sua casa. Quando seu pai estava lotado em Lima, como parte da missão militar francesa permanente no Peru,Françoise ficou deslumbrada com a vida noturna de sua cidade adotiva, e ela continuamente entrava e saía da cena social,lutando para encontrar um lugar para si mesma que não fosse definido pelo trabalho de seu pai.Quando,por acaso,ganhou em seu 21o aniversário uma câmera fotográfica de presente,a jovem encontrou sua resposta.Desde então,ela vem construindo uma reputação como fotógrafa em Lima. No entanto, ela desejava ser levada a sério, além do que uma cronista da alta sociedade de Lima, e queria começar a trabalhar com fotografia paisagística. Ultimamente, Françoise tem visitado vários sítios arqueológicos de Lima, particularmente os templos de Pachacamac, cuja antiguidade e persistência a fascinam. Ao ficar sabendo do anúncio de Augustus Larkin sobre a busca de uma pirâmide perdida, ela viu uma oportunidade de finalmente se libertar e encontrar aventura e satisfação pessoal. Tendo assegurado uma vaga para documentar a expedição, Françoise vê o esforço de Larkin como uma oportunidade de se provar para aqueles que sentem que ela estaria melhor se continuasse trabalhando com o que já sabe fazer.",
    personalDescription: "Francesa branca; cabelo loiro ondulado e um sorriso largo. Veste-se com trajes masculinos sempre que acredita que vai se safar. Seus olhos cor de avelã procuram constantemente o melhor ângulo para uma foto.",
    traits: "Determinada e teimosa.",
    ideologyBeliefs: "Acredita que mulheres são tão capazes quanto qualquer homem, e está ansiosa para provar esse ponto.",
    treasuredPossessions: "A câmera dela."
  },
  inventory: {
    gearPossessions: [],
    spendingLevel: 10,
    cash: Math.floor(charNC * 2),
    assets: Math.floor(charNC * 50),
  }
}