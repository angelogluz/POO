export default class Personagem {
    constructor(
        private _nome: string,
        private energia: number,
        private vida: number,
        private ataque: number,
        private defesa: number
    ) {}

    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }
    public treinarAtacar(): void {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(5);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarDefesa(): void {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public descansar(hour: number): void {
        this.energia += hour * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    public batalhar(): number {
        let desgaste: number = this.randomizar(10);
        this.energia -= desgaste;
        return desgaste;
    }
    public isDead(): boolean {
        return this.energia < 0;
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
