document.addEventListener("DOMContentLoaded", (event) => {
    const formAlumnos = document.querySelector("#frmAlumno");

    formAlumnos.addEventListener("submit",(e) => {
        e.preventDefault();

        let Codigo = document.querySelector("#txtCodigoAlumno").value,
            Nombre = document.querySelector("#txtNombreAlumno").value,
            Direccion = document.querySelector("#txtDireccionAlumno").value,
            Telefono = document.querySelector("#txtTelefonoAlumno").value;
            
        var CCodigo = "Codigo"+Codigo;
        var CNombre = "Nombre"+Codigo;
        var CDireccion = "Direccion"+Codigo;
        var CTelefono = "Telefono"+Codigo;

        if('localStorage' in window){
            window.localStorage.setItem(CCodigo, Codigo);
            window.localStorage.setItem(CNombre, Nombre);
            window.localStorage.setItem(CDireccion, Direccion);
            window.localStorage.setItem(CTelefono, Telefono);
        }
        else{
            alert("No se pudo acceder al almacenamiento");
        }
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click", (e) => {
        if('localStorage' in window){
            let Codigo = document.querySelector("#txtCodigoAlumno").value;
            if(Codigo != ""){
                document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("Codigo" + Codigo);
                document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("Nombre" + Codigo);
                document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("Direccion" + Codigo);
                document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("Telefono" + Codigo);
            }
            else{
                alert("");
            }
        }
        else{
            alert("No se encuentran los datos solicitados");
        }
    })
});
