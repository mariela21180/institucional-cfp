document.addEventListener("DOMContentLoaded", function (event) {

    let tblCampos = document.querySelector('#tblCampos');
    let guardarExamen = document.getElementById('guardarExamen');
    let agregarTextoModal = document.getElementById('agregarTextoModal');
    let agregarOpMultiModal = document.getElementById('agregarOpMultiModal');
    let agregarOpSimpleModal = document.getElementById('agregarOpSimpleModal');
    let agregarOpListaModal = document.getElementById('agregarOpListaModal');

    guardarExamen.addEventListener('click', crearExamen);
    agregarTextoModal.addEventListener('click',guardarTexto );
    agregarOpMultiModal.addEventListener('click',guardarOpMulti );
    agregarOpSimpleModal.addEventListener('click',guardarOpSimple );
    agregarOpListaModal.addEventListener('click',guardarOpLista );
    
    function guardarTexto(){
        event.preventDefault();        
        var form = $('#texto-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar horario a la tabla y validar que aun no exista

            $('#modalTexto').modal('hide');
        }
    }
    function guardarOpMulti(){
        event.preventDefault();        
        var form = $('#op-multi-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar horario a la tabla y validar que aun no exista

            $('#modalOpMulti').modal('hide');
        }
    }
    function guardarOpSimple(){
        event.preventDefault();        
        var form = $('#op-simple-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar horario a la tabla y validar que aun no exista

            $('#modalOpSimple').modal('hide');
        }
    }
    function guardarOpLista(){
        event.preventDefault();        
        var form = $('#op-lista-modal-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para agregar horario a la tabla y validar que aun no exista

            $('#modalOpLista').modal('hide');
        }
    }
    
    function crearExamen(event) { 
        event.preventDefault();        
        var form = $('#examen-form');

        form.parsley().validate();

        if (form.parsley().isValid()){
            // Poner acá las funciones para guardar en servidor
        }
    }

    cargarCampos();

    function cargarCampos() {
        let campos = mock();
        let html = "";

        campos.forEach(campos => {
            html += agregarCampos(campos)
        });
        tblCampos.innerHTML = html;
        let btnsEliminar = document.querySelectorAll(".eliminarCampos");
        let btnsEditar = document.querySelectorAll(".editarCampos");
        btnsEditar.forEach(b => { b.addEventListener("click", editarCampos) });
        btnsEliminar.forEach(a => { a.addEventListener("click", eliminarCampos) });
    }

    function agregarCampos(campos) {
        let htmlCampo = ""

        htmlCampo += consigna(campos);
        switch (campos.tipo) {
            case "texto":

                htmlCampo += `
                <div class="col form-group">
                    <textArea  id="respConsigna${campos.idCampos}" class="form-control"  rows="1">
                    </textArea>
                </div>

        
                <div class="col-auto pl-0">
                                
                    <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos btn-sm m-1 btn-danger">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    
                </div>
            </div>
      
            `;
                break;
            case "simple":
                htmlCampo += `
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="respConsigna${campos.idCampos}1" value="option1">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}1">Opción 1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="respConsigna${campos.idCampos}2" value="option2">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}2">Opción 2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="respConsigna${campos.idCampos}3" value="option3">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}3">Opción 3</label>
                    </div>
                </div>
                <div class="col-auto pl-0">
                    <button type="button" data-id="${campos.idCampos}" class="btn btn-sm eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
                
                `
                break;
            case "multiple":
                htmlCampo += `
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="respConsigna${campos.idCampos}1" value="option1">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}1">Opción 1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="respConsigna${campos.idCampos}2" value="option2">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}2">Opción 2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="respConsigna${campos.idCampos}3" value="option3">
                        <label class="form-check-label" for="respConsigna${campos.idCampos}3">Opción 3</label>
                    </div>
                </div>
                <div class="col-auto pl-0">
                     <button type="button" data-id="${campos.idCampos}" class="btn btn-sm eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>   
            </div>
                    `
                break;

            case "lista":
                htmlCampo += `
                <div class="col">
                    <div class="form-group">
                        <select class="form-control" id="respConsigna${campos.idCampos}">
                            <option value="">Seleccione una opción</option>
                            <option value="respConsigna${campos.idCampos}1">Opción 1</option>
                            <option value="respConsigna${campos.idCampos}2">Opción 2</option>
                            <option value="respConsigna${campos.idCampos}3">Opción 3</option>
                            <option value="respConsigna${campos.idCampos}4">Opción 4</option>
                        </select>
                    </div>
                </div>
                <div class="col-auto pl-0">
                     <button type="button" data-id="${campos.idCampos}" class="btn btn-sm eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
                        
                        `
                break;


        }

        return htmlCampo;

    }

    function editarCampos() {
        let id = this.getAttribute("data-id");
        console.log('editando el curso con id ' + id);
    }

    function eliminarCampos() {
        let id = this.getAttribute("data-id");
        console.log('eliminando el curso con id ' + id);
    }

    function mock() {
        return [
            {
                idCampos: 1,
                consigna: 'Como hacer campo de tipo texto para completar',
                tipo: "texto"
            },
            {
                idCampos: 2,
                consigna: 'Como hacer eleccion simple',
                tipo: "simple"
            },
            {
                idCampos: 3,
                consigna: 'Como hacer eleccion multiple',
                tipo: "multiple"
            },
            {
                idCampos: 4,
                consigna: 'Como hacer una lista',
                tipo: "lista"
            }
        ]
    }

    function consigna(campos) {
        return `
        <div class="row mb-2">
            <div class="col-12">
            <label for="">${campos.consigna}</label>
            </div>`
    }



});

// para que el campo del textarea sea auto redimensionable.
$(function () {
    let textArea = $(document.querySelectorAll('#respConsigna')),
        hiddenDiv = $(document.createElement('div')),
        content = null;

    textArea.addClass('noscroll');
    hiddenDiv.addClass('hiddendiv');

    $(textArea).after(hiddenDiv);

    textArea.on('keyup', function () {
        content = $(this).val();
        content = content.replace(/n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');
        $(this).css('height', hiddenDiv.height());
    });
});