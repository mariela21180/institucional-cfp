use `institucional_cfl`;

insert into persona values (1, "Mariela", "Gonzalez", 28200912, "mariela@gmail.com");
insert into persona values (2, "Juan", "Salerno", 2000000, "juan@gmail.com");
insert into persona values (3, "Nahum", "Larzabal", 2000001, "nahum@gmail.com");

insert into domicilio(idDomicilio, calle, altura, idPersona) values (1, "Alberdi", 763, 2);
insert into domicilio(idDomicilio, calle, altura, idPersona) values (2, "25 de Mayo", 963, 1);
insert into domicilio(idDomicilio, calle, altura, idPersona) values (3, "Canada", 123, 3);

insert into telefono values (1, 0249, 154633817, 1);
insert into telefono values (2, 0249, 4420983, 1);
insert into telefono values (3, 0249, 154997785, 2);

insert into docente values (1, "Universitario Incompleto", "Lisenciado en Administración");
insert into docente values (2, "Universitario Completo", "Contador Publico");

insert into alumno values (1, "Universitario Incompleto", false);
insert into alumno values (2, "Universitario Completo", false);
insert into alumno values (3, "Terciario Incompleto", true);

insert into usuario values (1, "mariela21180", "testpass123", 1);

-- insert into asistencia values (1, 1);

insert into curso values (1, "Programador Full-Stack", "-", 30, "2019-01-02", "2019-12-02", 1, 0.8, 180.5);

insert into clase values (1, 1, "2019-01-02 19:00:00", "2019-01-02 22:30:00");

insert into material values (1, 1, 1);

insert into tema values (1, "Base de Datos", 1);

insert into archivo values (1, "/assets/imagen.jpg", 1);

insert into horario values (1, "Lunes", "19hs", "22:30hs", 1);

insert into formulario values (1, 1, "Examen 1", "MySQL");

insert into examen values (1, 1, 1, 1, 5.8);

insert into tipo_pregunta values (1, "Texto");

insert into pregunta values (1, 1, "¿Como me llamo?", 1, 1, 1, 2.5);

insert into opcion values (1, "Mariela", 1, 1, 2.5);



