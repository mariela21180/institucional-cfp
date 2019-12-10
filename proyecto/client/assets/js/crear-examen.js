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
       let htmlCampo =""

       htmlCampo +=  consigna(campos); 
        switch( campos.tipo){
        case "texto": 

        htmlCampo += `
        <div class="col-12 form-group">
            <textArea  id="respConsigna" class=" form-control" rows="5">
            </textArea>
            </div>
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-auto m-0 w-100">
                <button type="button" data-id="${campos.idCampos}" class="btn editarCampos m-1 btn-primary">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                            <button type="button" data-id="${campos.idCampos}" class="btn eliminarCampos m-1 btn-danger">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
            </div>
        </div>
            `;
            break;
        case "simple":
                htmlCampo += `
                
                `
            break;
        case "multiple":
                htmlCampo += `
                    
                    `
            break;

        case "lista":
                htmlCampo += `
                        
                        `
            break;
                
            
        }
        
        return htmlCampo;

    }

    function editarCampos(){
        let id = this.getAttribute("data-id");
        console.log('editando el curso con id ' + id);        
    }

    function eliminarCampos(){
        let id = this.getAttribute("data-id");
        console.log('eliminando el curso con id ' + id);        
    }

    function mock(){
        return  [
           {idCampos:1,
            consigna: 'Como hacer una cosa en js',
            tipo: "texto"

           } 
         ]
    }

    function consigna(campos){
        return `
        <div class="col">
        <div class="row">
            <div class="col-12">
            <label for="">${campos.consigna}</label>
            </div>`
    }

});