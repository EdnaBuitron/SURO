/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bindEvents();
    },
      bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
// Contenido para Index.html
$(document).ready(function(){
    document.addEventListener('backbutton', function (e) {
      app.views.main.router.back();
    });
    document.addEventListener("offline", onOffline, false);
    function networkInfo() {
      var networkState = navigator.connection.type;
      var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
      alert("Connection type:"+ states[networkState]);
    }

    function onOffline(){
      window.location.href = "offline.html";
    }
    
    $("#insert").click(function(){
      $('#preloader').html('<div class="preloader"></div>');
      var nombre = $('#nombre').val();
      var contra = $("#contra").val();
      var datos = "nombre=" + nombre + "&contra=" + contra +"&insert=";
      if($.trim(nombre).length > 0 & $.trim(contra).length > 0){
        $.ajax({
          type: "POST",
          url: "http://www.appbennetts.com/VIC/validaIndex.php",
          data: datos,
          success: function(data){
            if(data == "0"){
              alert("Usuario y/o Contrase�a invalido(s).");
              $("#preloader").fadeOut("slow");
            } else {
              var separado = data.split("/");
              var Usuario = separado[0];
              var Division = separado[1];
              var Nombre = separado[2];
              var Apellidos = separado[3];
              // console.log(Usuario+Division+Nombre+Apellidos)
              localStorage.setItem("IdUsuario", Usuario);
              localStorage.setItem("Division", Division);
              localStorage.setItem("Nombre", Nombre);
              localStorage.setItem("Apellidos", Apellidos);
              window.location.href = "menu.html";
            }
          }
        });
      } else {
        //app.dialog.alert('Favor de completar todos los datos.', 'Aviso');
        alert("Datos incompletos");
        $("#preloader").fadeOut("slow");
      }
    });
  });