export class Util {
    public static randomizar(inicio: number, fim: number): number {
        return inicio + Math.random() * (fim - inicio);
    }
}
