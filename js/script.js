function confirmacion() {
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_contraseña_confirmada = confirmacion_contraseña(); 
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();
    var retorno_sitio_web = validar_sitio_web();
    var retorno_aficiones_pasatiempos = validar_aficiones_pasatiempos();
    var retorno_comuna = validar_comuna();
    return retorno_correo && retorno_contraseña && retorno_contraseña_confirmada && retorno_direccion && retorno_telefono && retorno_sitio_web && retorno_aficiones_pasatiempos && retorno_comuna;
}

function validar_correo() {
    var input_correo = document.getElementById("input-correo");
    var div_error_correo = document.getElementById("error-correo");
    var correo = input_correo.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];

    if (correo == "") {
        div_error_correo.innerHTML = "El correo es obligatorio";
        div_error_correo.className = "text-danger small mt-1";
        return false;
    } 

    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_correo.innerHTML = "";
        return true;
    } else {
        div_error_correo.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_correo.className = "text-danger small mt-1";
        return false;
    }
}

function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;
    var letra = 0;
    var numero = 0;

    if (contraseña == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } 
    
    if (contraseña.length <= 6 && contraseña.length >= 3) {
        for (var i = 0; i < contraseña.length; i++) {
            contraseña_letra = contraseña[i];
            if (contraseña_letra <= "9" && contraseña_letra >= "0"){
                numero++;
            } else if (contraseña_letra >= "A" && contraseña_letra <= "Z" || contraseña_letra >= "a" && contraseña_letra <= "z")  {
                letra++;
            }
        }
    }
    
    if (letra > 0 && numero > 0){
            div_error_contraseña.innerHTML = "";
            return true;
        }
        
    if (letra == 0 || numero == 0) {
        div_error_contraseña.innerHTML = "La contraseña debe tener de 3 a 6 caracteres y al menos un dígito y una letra";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    }
}

function confirmacion_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var input_contraseña_confirmacion = document.getElementById("input-contraseña-confirmacion");
    var div_error_contraseña_confirmacion = document.getElementById("error-contraseña-confirmacion");
    var contraseña = input_contraseña.value;
    var contraseña_confirmacion = input_contraseña_confirmacion.value;

    if (contraseña == "") {
        div_error_contraseña_confirmacion.innerHTML = "La confirmacion de contraseña es obligatoria";
        div_error_contraseña_confirmacion.className = "text-danger small mt-1";
        return false;
    } 

    if (contraseña_confirmacion == "") {
        div_error_contraseña_confirmacion.innerHTML = "Tiene que escribir la contraseña nuevamente aqui";
        div_error_contraseña_confirmacion.className = "text-danger small mt-1";
        return false;
    }

    if (contraseña_confirmacion == contraseña){
        div_error_contraseña_confirmacion.innerHTML = "";
        return true;
    } else {
        div_error_contraseña_confirmacion.innerHTML = "La contraseña tiene que ser igual a la que escribio";
        div_error_contraseña_confirmacion.className = "text-danger small mt-1";
        return false;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La direccion es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;

    if (fono == "") {
        div_error_fono.innerHTML = "El numero de telefono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } 

    if (fono.length > 14) {
        div_error_fono.innerHTML = "El numero de telefono no puede ser más de 14 caracteres (se incluyen espacios)";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }

    var pos_inicio = fono.indexOf("+569");
    var pos_espacios = fono.split(" ");
    var primer_set = pos_espacios[pos_espacios.length - 2];
    var segundo_set = pos_espacios[pos_espacios.length - 1];
    var numero = 0;

    for (var i = 0; i < fono.length; i++) {
        fono_numeros = fono[i];
        if (fono_numeros <= "9" && fono_numeros >= "0"){
            numero++;
        }
    }

    if (pos_inicio == 0 && primer_set.length == 4 && segundo_set.length == 4 && numero == 11) {
        div_error_fono.innerHTML = "";
        return true;
    } else {
        div_error_fono.innerHTML = "El numero de telefono no tiene el formato correcto";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
}

function validar_sitio_web() {
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;

    if (url == "") {
        div_error_url.innerHTML = "La direccion de su sitio web es obligatoria";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } 
    
    var pos_inicio = url.indexOf("https://");
    var pos_puntos = url.split(".");
    var pos_ultimo_punto = url.lastIndexOf(".");
    var pos_fin = pos_puntos[pos_puntos.length - 1];

    if (pos_inicio == 0 && pos_ultimo_punto > pos_inicio && (pos_fin.length > 1 && pos_fin.length < 4)) {
        div_error_url.innerHTML = "";
        return true;
    } else {
        div_error_url.innerHTML = "La direccion de su sitio web no tiene el formato correcto";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
}

function validar_aficiones_pasatiempos() {
    var check_aficiones_pasatiempos = document.getElementsByClassName("form-check-input");
    var div_error_aficiones_pasatiempos = document.getElementById("error-aficiones-pasatiempos");
    var seleccionados = 0;
    lista_cosas = []
    for (var i = 0; i < check_aficiones_pasatiempos.length; i++) {
        if (check_aficiones_pasatiempos[i].checked) {
            seleccionados++;
            lista_cosas.push(check_aficiones_pasatiempos[i])
        }
    }
    if (seleccionados >= 2){
        if (seleccionados == lista_cosas.length) {
            div_error_aficiones_pasatiempos.innerHTML = "";
            console.log(lista_cosas)
            return true;
        }
    }

    div_error_aficiones_pasatiempos.innerHTML = "Debe seleccionar al menos dos aficiones/pasatiempos";
    div_error_aficiones_pasatiempos.className = "text-danger small mt-1";
    return false;
}

function validar_comuna(){
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "vacio") {
        div_error_comuna.innerHTML = "La seleccion de comuna es obligatoria";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}