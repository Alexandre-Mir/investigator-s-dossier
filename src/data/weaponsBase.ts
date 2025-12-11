import { Combat } from "../types/investigator";



export const WEAPONS_BASE: Record<string, Combat> = {
  "Unarmed": {
    name: "Desarmado (Briga)",
    skillUsed: {name: "Briga"},
    damage: "1D3 + DB",
    attacks: 1,
    range: "Toque",
    malfunction: 100
  },
  "Small Knife": {
    name: "Faca pequena",
    skillUsed: {name: "Briga"},
    damage: "1D4 + DB",
    attacks: 1,
    range: "Toque",
    malfunction: 100
  },
  ".32 Caliber Revolver": {
    name: "Revólver .32",
    skillUsed: {name: "Pistolas"},
    damage: "1D8",
    attacks: 1,
    maxAttacks: 3,
    range: "15 metros",
    ammo: 6,
    malfunction: 100 
  }
}