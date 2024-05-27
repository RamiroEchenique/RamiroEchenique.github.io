
        const regTel =/^[0-9][0-9]{10}$/; 
        const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

        function validar(){
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value;
            let mail = document.getElementById('mail').value;
            let telefono = document.getElementById('tel').value; /*Obtiene el valor actual del elemento del DOM con el id ‘tel’, que es un campo de entrada (input). La propiedad .value da el contenido que el usuario ha ingresado en ese campo*/
            let areaTexto = document.getElementById('areaTexto').value;

            const errorNombre = document.getElementById('errorNombre'); /*obtiene el elemento del DOM con el id ‘errorMensaje’, pero no su valor. errorElement se refiere al elemento en sí, no a su contenido*/
            const errorApellido = document.getElementById('errorApellido');
            const errorEmail = document.getElementById('errorEmail');
            const errorTel = document.getElementById('errorTel');
            const errorAreaTexto = document.getElementById('errorAreaTexto');

            if(nombre.length < 3 || nombre.length>10){ 
                errorNombre.innerHTML='El nombre tiene que ser mayor a 3 caracteres y menor a 10 caracteres'; // muestra el mensaje de error
                return false; /* evitara que el formulario se envie*/
            }

            if(apellido.length < 3|| apellido.length>10){
                errorApellido.innerHTML = 'El apellido tiene que ser mayor a 3 caracteres y menor a 10 caracteres';
                return false;
            }

            if (!regEmail.test(mail)){
                errorEmail.innerHTML='El formato debe ser por ejemplo: pedro@gmail.com'
                return false;
            }

            if( (!regTel.test(telefono)) ){ /*telefono && (!regTel.test(telefono)*/
                errorTel.innerHTML ='El teléfono debe tener una longitud de 10 dígitos.';
                return false;
            }

            if (areaTexto === '') {
                errorAreaTexto.innerHTML = 'El mensaje no puede estar vacío';
                return false;
            }

            if(tel && nombre && apellido && mail && telefono){
                //alert(`${nombre}, nos comunicaremos contigo a la brevedad`)
                // Limpiar contenedor de datos anteriores
                const datosEnviados = document.getElementById('datosEnviados');
                datosEnviados.innerHTML = '';
                // Crear elementos HTML para cada dato
                const nombreElement = document.createElement('p');
                const apellidoElement = document.createElement('p');
                const emailElement = document.createElement('p');
                const telElement = document.createElement('p');
                const mensajeElement = document.createElement('p');

                //creacion del mensaje

                nombreElement.textContent = `Hola ${nombre} ${apellido} nos comunicaremos a la brevedad a los siguientes medios que nos proporcionaste: `;
                datosEnviados.appendChild(nombreElement);

                emailElement.textContent = `Email: ${mail}`;
                datosEnviados.appendChild(emailElement);

                telElement.textContent = `Telefono: ${telefono}`;
                datosEnviados.appendChild(telElement);
                
                mensajeElement.textContent = `Mensaje: ${areaTexto}`;
                datosEnviados.appendChild(mensajeElement);

                // Mostrar el contenedor con los datos
                datosEnviados.style.display = 'block';

            }
            //Limpieza de campos y errores
            document.getElementById('formulario').reset();
            errorNombre.innerHTML = '';
            errorApellido.innerHTML = '';
            errorEmail.innerHTML='';
            errorTel.innerHTML='';

            
        return false;
        }
    