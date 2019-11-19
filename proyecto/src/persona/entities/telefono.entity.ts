export default class Telefono {
    private idTelefono: number;
    private codArea: number;
    private nro: number;

    public constructor(codArea:number, nro:number) {
        this.codArea = codArea;
        this.nro = nro;
      
    }

    public getIdTelefono(): number{
        return this.idTelefono;
    }

    public getCodArea(): number {
        return this.codArea;
    }

    public getNro():number {
        return this.nro;
    }

}