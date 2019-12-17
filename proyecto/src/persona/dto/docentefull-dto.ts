import { TelefonoDto } from "./telefono-dto";
import { DomicilioDto } from "./domicilio-dto";
import { PersonaDto } from "./persona-dto";

export class DocenteFullDto {
    readonly nivelEstudioAlcanzado: string;
    readonly titulo: string;
    readonly nombre: string;
    readonly apellido: string;
    readonly dni: number;
    readonly eMail: string;
    readonly codArea: number;
    readonly nro: number;
    readonly calle: string;
    readonly altura: number;
    readonly piso?: string;
    readonly dpto?: string;
}