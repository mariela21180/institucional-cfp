export class UsuarioDto {
    readonly usuario: string;
    readonly password: string;
    readonly idPersona: number;
    readonly nivelAcceso?: number;
}
