export class TipoPregunta {
    private value: number;
    private text: string;
    // Texto = 1,
    // OpcionSimple = 2,
    // OpcionMultiple = 3,
    // OpcionPorLista = 4
    constructor(value: number, text: string) {
        this.value = value;
        this.text = text;
    }

    public getValue(): number {
        return this.value;
    }
    public getText(): string {
        return this.text;
    }
}