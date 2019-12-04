/*Cuando tocas guardar llenar el formulario en la tabla
y refrescar la tabla y cambiar la paguina al home de formulario*/

let btnGuardarFormulario = document.getElementById('btnGuardarFormulario');
let nombreFormulario = document.getElementById('nombreFormulario');
let descripcion = document.getElementById('descripcion');
let tblFormulario = document.getElementById('tblFormulario');
let mock = [
    {'nombreformulario':'Cruso',
'descripcion':'curso programador full stack'
},
{'nombreformulario':'Alumnos',
'descripcion':'Inscrpción de Alumnos'
},
{'nombreformulario':'Asistencias',
'descripcion':'Cómputo de asistencias 1'
}
];

let campos = [];
