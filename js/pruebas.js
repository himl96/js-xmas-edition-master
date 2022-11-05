
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert (
    validarNombre ("123123") === "El campo nombre solo acepta letras",
    "Validar nombre no validó que el nombre solo tenga letras"
  );

  console.assert(
    validarNombre ("fabricio") === "",
    "validar nombre falló con un nombre valido"
  )
}

probarValidarNombre();

function probarValidarCiudad () {

    console.assert(
    validarCiudad("Buenos aires") === "",
    "Validar ciudad No funciono con un nombre de ciudad valido"
);



probarValidarCiudad ();

console.assert(
    validarCiudad ("") === "Este campo no puede estar vacío",
    "Validar ciudad no mostró un error cuando la ciudad es vacía"
);
}  

/////////////////////////////////PRUEBA DUMMY/////////////////////////////////

/*
function probarValidarDescripcionRegalo () {
    console.assert (
        ValidarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter",
        "Validar Descripción de regalo no validó que la descripción no sea vacía",
    );
    console.assert (
        ValidarDescripcionRegalo("0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789")===
        'Este campo debe tener menos de 100 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}

probarValidarDescripcionRegalo ();
*/
/////////////////////////////////PRUEBA DUMMY/////////////////////////////////


function ProbarValidarDescripcionRegalo () {
    /*console.assert(
        ValidarDescripcionRegalo("") === "El campo descripción no puede estar vacío",
        "La función validar descripción regalo no validó que el campo no esté vacío"
    );*/

    console.assert(
        ValidarDescripcionRegalo ("0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789") === "El campo de descripción es muy largo",
        "La función validar descripción regalo no validó que el campo no sea muy largo"
    );
    
    console.assert (
        ValidarDescripcionRegalo ("regalo") === "",
        "La función validar descripción regalo no funcionó con una descripción correcta"
    );


    console.assert (
        ValidarDescripcionRegalo (".,.,.,.,.") === "El campo de descripción solo puede tener números y letras",
        "La función validar descripción regalo no validó que fuera solo números y letras"
    )
}

ProbarValidarDescripcionRegalo();
