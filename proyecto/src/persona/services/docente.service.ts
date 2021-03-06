import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Docente from '../entities/docente.entity';
import { DocenteDto } from '../dto/docente-dto';
import Persona from '../entities/persona.entity';
import { PersonaService } from './persona.service';
import { PersonaDto } from '../dto/persona-dto';
import { DocenteFullDto } from '../dto/docentefull-dto';
import { DomicilioDto } from '../dto/domicilio-dto';
import Domicilio from '../entities/domicilio.entity';
import { DomicilioService } from './domicilio.service';
import { TelefonoService } from './telefono.service';
import { TelefonoDto } from '../dto/telefono-dto';
import Telefono from '../entities/telefono.entity';

@Injectable()
export class DocenteService {
    public constructor(
        @InjectRepository(Docente) 
        private readonly docenteRepository: Repository<Docente>,
        private readonly personaService: PersonaService,
        private readonly domicilioService: DomicilioService, 
        private readonly telefonoService: TelefonoService
    ) {}

    async addDocente(docenteDto: DocenteDto): Promise<Docente> {
        const persona = await this.personaService.getPersona(docenteDto.idPersona);
        if(!persona) {
            throw new HttpException('Persona does not exist!', 404);
        } 
        const docente = new Docente(docenteDto['idPersona'], docenteDto['nivelEstudioAlcanzado'], docenteDto['titulo']);
        return await this.docenteRepository.save(docente);
    }

    async getDocentes(): Promise<Docente[]> {
        return await this.docenteRepository.find();
    }

    async getDocente(docenteId: number): Promise<Docente> {
        const docente = await this.docenteRepository.findOne(docenteId);

        if (!docente) {
            throw new HttpException('Docente inexistente', 404);
        }
        return docente;
    }

    async deleteDocente(docenteId: number): Promise<Docente[]> {
        await this.docenteRepository.delete(docenteId);
        return await this.docenteRepository.find();
    }

    async updateDocente(docenteId: number, docenteDto: DocenteDto): Promise<Docente> {
        const docente = await this.docenteRepository.findOne(docenteId);

        if (!docente) {
            throw new HttpException('Docente inexistente', 404);
        }

        docente.setNivelEstudioAlcanzado(docenteDto.nivelEstudioAlcanzado);
        docente.setTitulo(docenteDto.titulo);

        return await this.docenteRepository.save(docente);
    }

    async guardarDocenteFull(docenteFull: DocenteFullDto, idDocente?: number): Promise<string> {
        let resultado: string;
        let personaDTO: PersonaDto;
        let persona: Persona;
        let domicilioDTO: DomicilioDto;
        let domicilio: Domicilio;
        let telefonoDTO: TelefonoDto;
        let telefono: Telefono;
        let docenteDTO: DocenteDto;
        let docente: Docente;
        let personaExistente: Persona;
        if (!idDocente) {          
            personaExistente = await this.personaService.getPersonaByDNI(docenteFull.dni);
            if (!personaExistente) {    
                domicilioDTO = {
                    calle: docenteFull.calle,
                    altura: docenteFull.altura,
                    piso: docenteFull.piso,
                    dpto: docenteFull.dpto
                }
                domicilio = await this.domicilioService.addDomicilio(domicilioDTO);
                if (!domicilio) {
                    return resultado = 'No se pudo crear el Domicilio';
                }
                telefonoDTO = {
                    codArea: docenteFull.codArea,
                    nro: docenteFull.nro
                }
    
                telefono = await this.telefonoService.addTelefono(telefonoDTO);
                if (!telefono) {
                    return resultado = 'No se pudo crear el Telefono';
                }
                personaDTO = {
                    nombre: docenteFull.nombre,
                    apellido: docenteFull.apellido,
                    dni: docenteFull.dni,
                    eMail: docenteFull.eMail, 
                    idDomicilio: domicilio.getIdDomicilio(),
                    idTelefono: telefono.getIdTelefono()
                };
                persona = await this.personaService.addPersona(personaDTO);
                if (!persona) {
                    return resultado = 'No se pudo crear la Persona';
                }
            } else {                          
                personaDTO = {
                    nombre: docenteFull.nombre,
                    apellido: docenteFull.apellido,
                    dni: docenteFull.dni,
                    eMail: docenteFull.eMail,
                    idDomicilio: personaExistente.getIdDomicilio(),
                    idTelefono: personaExistente.getIdTelefono()
                };
                persona = await this.personaService.updatePersona(personaExistente.getIdPersona(), personaDTO);
                if (!persona) {
                    return resultado = 'No se pudo actualizar la Persona';
                }
                domicilioDTO = {
                    calle: docenteFull.calle,
                    altura: docenteFull.altura,
                    piso: docenteFull.piso,
                    dpto: docenteFull.dpto
                }
                domicilio = await this.domicilioService.updateDomicilio(personaExistente.getIdDomicilio(), domicilioDTO);
                if (!domicilio) {
                    return resultado = 'No se pudo actualizar el Domicilio';
                }
                telefonoDTO = {
                    codArea: docenteFull.codArea,
                    nro: docenteFull.nro
                }
                telefono = await this.telefonoService.updateTelefono(personaExistente.getIdTelefono(), telefonoDTO);
                if (!telefono) {
                    return resultado = 'No se pudo actualizar el Telefono';
                }
            }
            docenteDTO = {
                nivelEstudioAlcanzado: docenteFull.nivelEstudioAlcanzado,
                titulo: docenteFull.titulo,
                idPersona: persona.getIdPersona()
            };
            docente = await this.addDocente(docenteDTO)
            if (!docente) {
                return resultado = 'No se pudo crear el Docente';
            }

            resultado = "ok";
        } else {
            personaExistente = await this.personaService.getPersona(idDocente)
            
            if (!personaExistente) {
                return resultado = 'No se pudo encontrar la Persona';
            }            
            personaDTO = {
                nombre: docenteFull.nombre,
                apellido: docenteFull.apellido,
                dni: docenteFull.dni,
                eMail: docenteFull.eMail,
                idDomicilio: personaExistente.getIdDomicilio(),
                idTelefono: personaExistente.getIdTelefono()
            };
            persona = await this.personaService.updatePersona(idDocente, personaDTO);
            if (!persona) {
                return resultado = 'No se pudo actualizar la Persona';
            }
            domicilioDTO = {
                calle: docenteFull.calle,
                altura: docenteFull.altura,
                piso: docenteFull.piso,
                dpto: docenteFull.dpto
            }
            domicilio = await this.domicilioService.updateDomicilio(personaExistente.getIdDomicilio(), domicilioDTO);
            if (!domicilio) {
                return resultado = 'No se pudo actualizar el Domicilio';
            }
            telefonoDTO = {
                codArea: docenteFull.codArea,
                nro: docenteFull.nro
            }
            telefono = await this.telefonoService.updateTelefono(personaExistente.getIdTelefono(), telefonoDTO);
            if (!telefono) {
                return resultado = 'No se pudo actualizar el Telefono';
            }

            docenteDTO = {
                nivelEstudioAlcanzado: docenteFull.nivelEstudioAlcanzado,
                titulo: docenteFull.titulo,
                idPersona: persona.getIdPersona()
            };
            docente = await this.updateDocente(idDocente, docenteDTO)
            if (!docente) {
                return resultado = 'No se pudo actualizar el Docente';
            }

            resultado = "ok";
        }


        return resultado;
    }
}
