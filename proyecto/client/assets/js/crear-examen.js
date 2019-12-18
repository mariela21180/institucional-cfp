document.addEventListener("DOMContentLoaded", function (event) {

    let tblCampos = document.querySelector('#tblCampos');


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
                <div class="col  form-group">
                    <textArea  id="respConsigna" class="form-control" rows="2">
                    </textArea>
                </div>

        
            <div class="col-auto  row align-items-center ml-auto ">
                               
                <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos m-1 btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                
            </div>
        </div>
      
            `;
                break;
            case "simple":
                htmlCampo += `
                    <div class="row m-0 w-100 mb-2">
                        <div class="col form-check">
                             <input class="form-check-input" type="radio" name="customRadio" id="">
                             <input type="text" class="form-control">

                        </div>
                        <div class="col-auto p-0">
                             <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                `
                break;
            case "multiple":
                htmlCampo += `
                <div class="row m-0 w-100 mb-2">
                    <div class="col form-check">
                     <input class="form-check-input" type="checkbox" name="" id="">
                     <input type="text" class="form-control">

                    </div>
                    <div class="col-auto p-0">
                     <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </div>
                </div>      
                </div>      
                    `
                break;

            case "lista":
                htmlCampo += `
                <div class="row m-0 w-100 mb-2">
                <div class="col form-check">
                     <input class="form-check-input" type="radio" name="customRadio" id="">
                     <input type="text" class="form-control">

                </div>
                <div class="col-auto p-0">
                     <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos m-1 btn-danger"><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
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
                consigna: 'Como hacer campo de tipo texto para auto completar',
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
            },
            {
                idCampos: 5,
                consigna: 'Como hacer una lista',
                tipo: "texto"
            }
        ]
    }

    function consigna(campos) {
        return `
        <div class="row">
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