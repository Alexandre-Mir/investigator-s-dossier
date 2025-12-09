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
  }
}