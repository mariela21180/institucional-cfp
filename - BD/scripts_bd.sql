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
insert into docente values (3, "Terciario Incompleto", "Analista en Sistemas");