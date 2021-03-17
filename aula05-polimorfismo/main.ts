import { Priest } from "./src/Priest";
import { Mage } from "./src/Mage";
import { Personagem } from "./src/Personagem";

let mage: Personagem = new Mage("Angelo mage");
let priest: Personagem = new Priest("Angelo priest");

const personagens: Personagem[] = [];
personagens.push(mage);
personagens.push(priest);

personagens.forEach((p) => console.log(p.atacar()));
