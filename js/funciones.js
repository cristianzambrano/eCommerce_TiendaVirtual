function fillLista(Url, divID, idItemSelected, addItemAll=false) {
  
  $.ajax({
      url: Url 
  }).done(function (data) {
     
  
     data = JSON.parse(data);
    
     
      if(addItemAll) $("#" + divID).append( "<option value=-1>Seleccione una opción</option>");

      for (var i = 0; i < data.length; i++) {
        
          var opc =  "<option ";
          if (idItemSelected == data[i].id ) opc = opc + " selected ";
          opc = opc + " value=" + data[i].id + ">" + data[i].descripcion + "</option>";
          $("#" + divID).append(opc);
      }

  });
}

function showListadoProductos() {


  $('#tabla').DataTable({

  "ajax":  "http://localhost/tienda/producto/getListado",
  "rowId": "dt_rowid",
  "columns": [
      
      {data: "dt_rowid"}, 
      {data: "idcategoria"},
      {data: "idmarca"},
      {data: "descripcion"},
      {data: "pvp"},
      {data: "impuesto"},
      {data: "dt_rowid"},

  ],
 

});

}



