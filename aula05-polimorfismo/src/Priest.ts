import { Personagem } from "./Personagem";
import { Util } from "./util/Util";

export class Priest extends Personagem {
  public defender(atacante: Personagem): number {
    throw new Error("Method not implemented.");
  }
  private _espirito: number;
  private _versatilidade: number;
  constructor(nome: string) {
    super(nome);
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(20, 1_000);
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
    this._espirito = Util.randomizar(100, 1_000);
    this._versatilidade = Util.randomizar(100, 1_000);
  }

  public atacar(): string {
    return "Ataque do Padre";
  }
}
