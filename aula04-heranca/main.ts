import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
