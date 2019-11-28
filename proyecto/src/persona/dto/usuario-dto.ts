export class UsuarioDto {
    readonly usuario: string;
    readonly password: string;
    readonly persona: number;
    readonly nivelAcceso?: number;
}
