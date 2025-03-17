export  const regexValidation = {

  validUsuario:/^[a-z][a-z0-9]{5,}?/,
  validPassword: /^(?=.*[A-Z](?=.*\d).{8,})/,
  validNombre: /^[a-zA-Z]/,
  validApellido: /^[a-zA-Z]/


}

//?pasamos el tipo de dato y su valor a la funcion
export  const campoRegex=(type,value)=>{
    return regexValidation[type]?regexValidation[type].test(value):false
}

