
function fxValidaFrm() {

  if($("#regDescripcion").val().trim()=="") return "Ingrese Descripción del Producto";

  if($("#txtImpuesto").val().trim()=="") return "Ingrese Valor del Impuesto del Producto";
  
  var valor = $("#txtImpuesto").val().trim();
  if (isNaN(valor))  return "Ingrese Impuesto Válido"
  
  if(valor <0 ) return "Ingrese Valor del Impuesto del Producto mayor a 0";
  if(valor > 10 ) return "Ingrese Valor del Impuesto del Producto menor a 10";

   
  return "";
}


function showErrorModalMsg(Titulo, Mensaje) {
  $('#modalSmsTitle').text(Titulo,);
  $('#modalSmsBody').html('<i class="fa fa-exclamation-circle" style="color:red" aria-hidden="true"></i> <b>' + Mensaje + '</b>');
  $('#modalSms').modal('show');
}

function showSuccessModalMsg(Titulo, Mensaje) {
  $('#modalSmsTitle').text(Titulo,);
  $('#modalSmsBody').html('<i class="fa fa-info-circle" style="color:blue" aria-hidden="true"></i> <b>' + Mensaje + '</b>');
  $('#modalSms').modal('show');
}




