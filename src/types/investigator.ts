export interface Profile {
  imageUrl?: string;
  name: string;
  occupation: string;
  birthplace: string;
  residence: string;
  age: number;
}

export interface Characteristics {
  strength: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  size: number;
  power: number;
  appearance: number;
  education: number;
  move?: number;
  build?: number;
}

export interface Status {
  hitPoints: {current: number; max: number};
  magicPoints: {current: number; max: number};
  luck?: {initial: number; current: number};
  sanity: {current: number; max: number; initial: number};
}

export interface Skills {
  name: string;
  baseValue: number;
  currentValue?: number;
  toUpgrade?: boolean | false;
  group: string
}

export interface Combat {
  name: string;
  skillUsed?: {value?: number, name?: string};
  damage: string;
  attacks: number;
  maxAttacks?: number, 
  range?: string;
  ammo?: string | number ;
  malfunction: number;
}

export interface Backstory {
  story?: string;
  personalDescription?: string;
  traits?: string;
  ideologyBeliefs?: string;
  injuriesScars?: string;
  significantPeople?: string;
  phobiasManias?: string;
  meaningfulLocations?: string;
  arcaneTomesSpells?: string;
  treasuredPossessions?: string;
  encountersWithStrangeEntities?: string;
  observations?: string;
}

export interface Inventory{
  gearPossessions: string[];
  spendingLevel: number;
  cash: number;
  assets: number;
}

export interface Investigator {
  id: number;
  profile: Profile;
  characteristics: Characteristics;
  status: Status;
  skills: Skills[];
  combat: Combat[];
  backstory: Backstory;
  inventory: Inventory;
}

