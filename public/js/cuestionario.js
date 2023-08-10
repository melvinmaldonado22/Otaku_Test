const url = `${window.origin}/preguntas/texto`;
let pregunta = []
const preguntas = () => {
    
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
    },
    })
    .then((response) => response.json())
    .then((data) => {
        pregunta = data
    })
    .catch((error) => {console.error(error)
    });
}
preguntas();

function obtenerRegistro(indice) {
    return new Promise((resolve, reject) => {
      if (indice < pregunta.length) {
        setTimeout(() => {
          resolve(pregunta[indice]);
        }, 1000); // Simulamos un retraso para efectos de demostración
      } else {
        reject(new Error("No hay más registros."));
      }
    });
  }
  
  // Uso de la función para obtener registros uno por uno
  let indiceActual = 0;
  
  function obtenerSiguienteRegistro() {
    obtenerRegistro(indiceActual)
      .then((registro) => {
        // console.log(registro);
        document.getElementById('cuestionario').innerHTML = `
        <h1>${registro.pregunta}</h1>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
            <label class="form-check-label" for="exampleRadios1">
                ${registro.opcion1}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                ${registro.opcion2}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
            <label class="form-check-label" for="exampleRadios3">
                ${registro.opcion3}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4">
            <label class="form-check-label" for="exampleRadios4">
                ${registro.opcion4}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5">
            <label class="form-check-label" for="exampleRadios5">
                ${registro.respuesta}
            </label>
        </div>
        `
        indiceActual++;
      })
      .catch((error) => {
        console.error(error);
      });
  }