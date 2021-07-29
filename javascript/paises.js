
const getHtmlPaises = (paises) => {

  let html = "";

  if (paises.error) {
    Swal.fire("Atencion", paises.error, "error");
  }

  if (paises.length > 0) {

    html = `<table class="table table-bordered table-hover dt-responsive tablas">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Region</th>
        <th scope="col">Sub-Region</th>
      </tr>
    </thead>
    <tbody>
  `;


    paises.forEach(usuario => {

      html += `<tr>
         <td>${usuario.nombre}</td>
         <td>${usuario.region}</td>
         <td>${usuario.sub_region}</td>
       </tr>`

    });

    html += `  
   
     </tbody>
   </table>`;

  }

  return html;

}

btnPais.addEventListener('click', async (e) => {
  e.preventDefault();
  $(".inicio").hide();

  contenidoMostrar.innerHTML = ` 
  <div class="alert alert-success" role="alert">Listado de Paises</div>`
  if (localStorage.getItem("Admin") == 'true') {
    contenidoMostrar.innerHTML += `<div class="d-flex justify-content-center"><button type="button" class="btn btn-success" id="crearUsuario" data-toggle="modal" data-target="#nuevoPais">Crear Pais</button></div><br>`;
  }
  const divTabla = document.createElement("div");
  divTabla.classList.add("divTabla")
  contenidoMostrar.appendChild(divTabla);

  divTabla.innerHTML = "";

  const ext = '/paisesFiltro/';
  const cuerpo = {};

  const metodo = 'POST';

  let paises = await fetcheo(url, ext, cuerpo, metodo);

  if (paises.error) { Swal.fire("Atencion", paises.error, "error") }
  if (paises) {
    const tabla = getHtmlPaises(paises);
    divTabla.innerHTML = tabla;


  } else if (paises.error) { Swal.fire("Atencion", paises.error, "error"); }
  else { Swal.fire("Atencion", paises.error, "error"); }

});

btnCrearPais.addEventListener('click', async (e) => {

  e.preventDefault();
  const nombre = document.querySelector('.nuevoNombrePais').value;
  const region = document.querySelector('.nuevoRegion').value;
  const sub_region = document.querySelector('.nuevoSubRegion').value;


  try {

    const ext = '/paises/';
    const cuerpo = {
      "nombre": nombre,
      "region": region,
      "sub_region": sub_region

    };
    const metodo = 'POST';

    let crearPaises = await fetcheo(url, ext, cuerpo, metodo);

    if (crearPaises.mensaje) {

      $('#nuevoPais').modal('hide');

      $('#nuevoPais').on('hidden.bs.modal', function (e) {
        $(this)
          .find("input,select")
          .val('')
          .end();
      })

      Swal.fire("Creado!", "Pais Creado Correctamente.", "success");
      document.querySelector(".divTabla").innerHTML = "";

    } else if (crearPaises.error) { Swal.fire("Atencion", crearPaises.error, "error"); }

  } catch (err) {
    Swal.fire("Atencion", error, "error");
  }


});