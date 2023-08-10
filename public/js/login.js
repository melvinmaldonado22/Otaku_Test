const url = `${window.origin}/usuarios/auth`;
const login = () => {
    
    var txt_usuario = document.getElementById('usuario').value;
    var txt_contraseña = document.getElementById('contraseña').value;
    
    const data = {
        usuario: txt_usuario, 
        contraseña : txt_contraseña
    }
    console.log(data);
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
    },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.auth){
            history.replaceState({}, '', data.url);
            window.location.replace(window.origin + data.url);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
                footer: '<a href="">olvidó su contraseña?</a>'
            })
        }
    })
    .catch((error) => {console.error(error)
    });
}