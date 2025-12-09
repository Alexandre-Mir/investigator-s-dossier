import { Investigator } from "@/src/types/investigator";
import { generateCustomSkills } from "../utils/characterHelpers";
import { calculateBuild, calculateHP, calculateMov, calculateMP } from "../utils/rules";
import { generateWeapons } from "../utils/combatHelpers";

const madelynCharacteristics = {
    strength: 50,
    constitution: 60,
    dexterity: 60,
    intelligence: 80,
    size: 55,
    power: 60,
    appearance: 65,
    education: 85
}

const madelynAge = 29

const madelynSkills = generateCustomSkills(madelynCharacteristics, 
  {
    "Antropologia": 70,
    "Arqueologia": 30,
    "Encontrar": 55,
    "Escalar": 50,
    "História": 60,
    "Mundo Natural": 40,
    "Nível de Crédito": 40,
    "Persuasão": 50,
    "Sobrevivência (Deserto)": 30,
    "Usar Bibliotecas": 50,
    "Primeiros Socorros": 50,
  }, 
  [
    { name:"Conhecimento (Aborígenes Australianos)", baseValue: 1, currentValue: 40, group: "Especiais / Mythos"},
    { name: "Língua (Arapahoe)", baseValue: 1, currentValue: 20, group: "Especiais / Mythos" },
    { name: "Língua (Dialeto Alngith)", baseValue: 1, currentValue: 45, group: "Especiais / Mythos" },
    { name: "Língua (Inglês Aborígene Australiano)", baseValue: 1, currentValue: 35, group: "Especiais / Mythos" },
    { name: "Sobrevivência (Deserto)", baseValue: 10, currentValue: 30, group: "Especiais / Mythos" }
  ]
)

export const MADELYN_BROWN: Investigator = {
  id: 1,
  profile:{
    imageUrl: "/madelyn-brown.png",
    name: "Madelyn Brown",
    occupation: "Antropóloga",
    birthplace: "Australia", 
    residence: "Sydney, Australia",
    age: madelynAge
  },
  characteristics: {
    ...madelynCharacteristics,
    move: calculateMov(madelynCharacteristics, madelynAge),
    build: calculateBuild(madelynCharacteristics)
  },
  status: {
    hitPoints: { current: 11, max: calculateHP(madelynCharacteristics) },
    magicPoints: {current: 12, max: calculateMP(madelynCharacteristics) },
    sanity: {current: 60, max: madelynCharacteristics.power, initial: 60}
  },
  skills: madelynSkills,
  combat: generateWeapons(["Unarmed", "Small Knife"], madelynSkills, madelynCharacteristics),
  backstory: {
    story: "Sempre lendo os livros de história de seu pai quando criança, Madelyn muitas vezes acabava perdida em sonhos com lugares exóticos distantes e pessoas estranhas com costumes ainda mais estranhos. Madelyn cresceu na companhia dos aborígenes australianos, que às vezes trabalhavam ou passavam pela fazenda de seu pai; ela adorava ouvir as histórias e aprender sobre a cultura, apesar de sua família desaprovar isso. Sua natureza acadêmica e amor pelo aprendizado fizeram com que ela se saísse bem na escola, encorajada por sua família e seus professores. Madelyn descobriu que poderia perseguir seu interesse em culturas estrangeiras através da ciência da antropologia e foi o que estudou na Universidade. Desde a graduação, ela teve a sorte de participar de vários projetos australianos e também, mais recentemente, pôde ir aos Estados Unidos passar um tempo com a tribo Arapahoe de Wyoming. Infelizmente, o pouco financiamento que ela recebera esgotou-se — então, quando ouviu falar que uma expedição no Peru estava à procura de pessoas, aproveitou a oportunidade para ver a América do Sul por si mesma. Após se corresponder com o líder da expedição, Augustus Larkin, ela fez as malas e foi para o sul com um sorriso no rosto.",
    personalDescription: "australiana branca com cabelo castanho escuro, pele clara e olhos verdes.",
    traits: "ambiciosa e obstinada, ela está determinada a ser uma das principais referências em seu campo.",
    ideologyBeliefs: "um desejo insaciável por aprender e descobrir.",
    treasuredPossessions: "uma velha cópia surrada de Alice no País das Maravilhas."
  },
  inventory: {
    gearPossessions: [""],
    spendingLevel: 1,
    cash: 1,
    assets: [""],
  }

}