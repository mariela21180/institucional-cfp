import { TelefonoDto } from "./telefono-dto";
import { DomicilioDto } from "./domicilio-dto";
import { PersonaDto } from "./persona-dto";
import { CursosAlumnoDto } from "./cursosalumno-dto";

export class AlumnoFullDto {
    readonly nivelEstudioAlcanzado: string;
    readonly adeudaDocumentacion: boolean;
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
    readonly cursos: CursosAlumnoDto[];
}