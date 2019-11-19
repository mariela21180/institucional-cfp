import Persona from "./persona.entity";

export default class Usuario {
    private idUsuario: number;
    private usuario: string;
    private password: string;
    private nivelAcceso: number;
    private persona: Persona;

    public constructor(usuario: string, password: string, persona: Persona, nivelAcceso?: number) {
        this.persona = persona;
        this.usuario = usuario;
        this.password = password;
        this.idUsuario = persona.getIdPersona();
        if (nivelAcceso == undefined) {
            this.nivelAcceso = 1;
        }
        else {
            this.nivelAcceso = nivelAcceso;
        }
    }

    public getIdUsuario(): number {
        return this.idUsuario;
    }

    public getPersona(): Persona {
        return this.persona;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public getPassword(): string {
        return this.password;
    }

    public getNivelAcceso(): number {
        return this.nivelAcceso;
    }
}