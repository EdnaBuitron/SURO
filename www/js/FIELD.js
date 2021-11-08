// Inicio Menu
function generateMenu(){
    // Declarar de botones
    var menu = ''
    menu += '<div class="buttons-container" style="display: flex;">';
    menu += '<a href="/datosgenerales/" class="fwm-button-recorrido">';
    menu += '<img src="img/iconsMenu/persona.svg" width="90px" height="90px" id="img1"/>';
    menu += '<span class="fwm-text-recorrido">Datos Generales</span>';
    menu += '</a>';
    menu += '<a href="/antes/" class="fwm-button-recorrido">';
    menu += '<img src="img/iconsMenu/antes.svg" width="90px" height="90px" id="img2"/>';
    menu += '<span class="fwm-text-recorrido">Antes</span>';
    menu += '</a>';
    menu += '</div>';
    menu += '<div class="buttons-container" style="display: flex;margin-top: 5%;">';
    menu += '<a href="/durante/" class="fwm-button-recorrido">';
    menu += '<img src="img/iconsMenu/durante.svg" width="90px" height="90px" id="img3"/>';
    menu += '<span class="fwm-text-recorrido">Durante</span>';
    menu += '</a>';
    menu += '<a href="/despues/" class="fwm-button-recorrido">';
    menu += '<img src="img/iconsMenu/despues.svg" width="90px" height="90px" id="img4"/>';
    menu += '<span class="fwm-text-recorrido">Después</span>';
    menu += '</a>';
    menu += '</div>';
    menu += '<div class="buttons-container" style="display: flex;margin-top: 5%;">';
    menu += '<a href="/cierre/" class="fwm-button-recorrido">';
    menu += '<img src="img/iconsMenu/estrellas.svg" width="90px" height="90px" id="img4"/>';
    menu += '<span class="fwm-text-recorrido">Evaluación y cierre</span>';
    menu += '</a>';
    menu += '</div>';
    menuButtons = $(menu);
    // Generar botones
    $("#FWM-Menu").prepend(menuButtons);
    // Verificar estado de equipos
    //Para cambiar los iconos de color
    var id_cedula = localStorage.getItem("IdCedula");
    
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql("SELECT * from fotos_fumigacion  WHERE id_cedula = ? AND fase = 'antes'",
                [id_cedula],
                function(tx, results){
                    var item = results.rows.item(0);
                    if(item.id_cedula > 0){
                        
                        document.getElementById("img2").src="img/iconsMenu/antes2.svg";
                    }
                },
                function(tx, error){
                }
            );
        },
        function(error){},
        function(){}
    );

    //Durante
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql("SELECT * from fotos_fumigacion  WHERE id_cedula = ? AND  fase = 'durante'",
                [id_cedula],
                function(tx, results){
                    var item = results.rows.item(0);
                    if(item.id_cedula > 0){
                        
                        document.getElementById("img3").src="img/iconsMenu/durante2.svg";
                    }
                },
                function(tx, error){
                }
            );
        },
        function(error){},
        function(){}
    );

    //Despues
    databaseHandler.db.transaction(
        function(tx){
            tx.executeSql("SELECT * from fotos_fumigacion  WHERE id_cedula = ? AND  fase = 'despues'",
                [id_cedula],
                function(tx, results){
                    var item = results.rows.item(0);
                    if(item.id_cedula > 0){
                        console.log("despues" + item.id_cedula);
                        document.getElementById("img4").src="img/iconsMenu/despues2.svg";
                    }
                },
                function(tx, error){
                }
            );
        },
        function(error){},
        function(){}
    );
}
// Fin Menu


// Inicio Form 1
function generateForm1(){
    
    var form1 = '';
    form1 += '<div class="fab fab-center-bottom fab-morph" data-morph-to=".demo-fab-fullscreen-sheet.fab-morph-target">';
    form1 += '<a href="#" style="background-color: #DCEFF2 !important;">';
    form1 += '<img src="img/mas.svg" width="20px" height="20px">';
    form1 += '</a>';
    form1 += '</div>';

    form1 += '<div class="demo-fab-fullscreen-sheet fab-morph-target">';
    form1 += '<div style="text-align: right; width:93%;"><br /><a href="#" class="fab-close"><img src="img/close.svg" alt="Cerrar" width="20px" height="20px"></a></div>';
    form1 += '<h3 style="color:#00A7B5; text-align: center;">Agregar Equipo</h3>';
                    
    form1 += '<form data-search-container=".search-list" data-search-in=".item-title" class="searchbar searchbar-init">';
    form1 += '<div class="searchbar-inner" style="margin-left: 20px;border: 1px solid gray;width: 90%;font-size: 16px;">';
    form1 += '<div class="searchbar-input-wrap">';
    form1 += '<input type="search" name="NuevoP" placeholder="Buscar Producto" id="autocomplete-dropdown-ajax" style="font-size: 16px;" onChange="autocompleteEquipo()"/>';
    form1 += '<i class="searchbar-icon"></i>';
    form1 += '<span class="input-clear-button"></span>';
    form1 += '</div>';
    form1 += '</div>';
    form1 += '</form>';

    form1 += '<div style="width:95%; margin: 0 auto; border-collapse: collapse;">';
    form1 += '<input type="hidden" id="PCode" name="PCode" />';
    form1 += '<input type="hidden" style="font-weight: normal; width:95%;" id="PDesc" name="PDesc"/>';
    form1 += '<a href="#" onClick="guardarNuevoEquipo()" style="margin-top: 45px;width: 100%;text-align: center;display: flex;justify-content: center;">';
    form1 += '<div style="display: flex;flex-direction: row;justify-content: center;align-content: center;background-color: #00A7B5;padding-top: 10px;padding-bottom: 10px;padding-left: 30px;padding-right: 30px;align-items: center;width: 100px;border-radius: 8px;">';
    form1 += '<span style="color: white;margin-right: 10px;">Guardar</span>';
    form1 += '<img src="img/save.svg" width="35px"/>';
    form1 += '</div>';
    form1 += '</a>';
    form1 += '</div>';
    form1 += '</div>';
                
    form1 += '<div class="page-content" style="margin-top: 35px;">';
    form1 += '<div style="text-align: center; justify-content:center; margin-right:auto; margin-left:auto; width: 99%;margin-top: 30px;">';
    form1 += '<h2 class="FWN-titulo-2">Equipos</h2>';
                
    form1 += '<form class="list FWM-fixing-form">';
    form1 += '<div id="productos"></div>';
                            
    form1 += '<span class="span FWM-span-form">Código:</span>';
    form1 += '<select id="codigos" class ="FWM-select" name="codigos" onchange="llamadasEquipo(this.id,this.value);">';
    form1 += '<option value="0">Seleccione una opción</option>';
    form1 += '</select>';
                            
    form1 += '<div class="fwm-radios-horizontal">';
    form1 += '<label class="item-radio item-content">';
    form1 += '<input class="radioBM" type="radio" id="Bradio" name="demo-radio" value="Equipo en buen estado"/>';
    form1 += '<i class="icon icon-radio"></i>';
    form1 += '<div class="item-title FWM-span-form">Buen estado</div>';
    form1 += '</label>';
                            
    form1 += '<label class="item-radio item-content">';
    form1 += '<input class="radioBM" type="radio" id="Mradio" name="demo-radio" value="Equipo en mal estado"/>';
    form1 += '<i class="icon icon-radio"></i>';
    form1 += '<div class="item-title FWM-span-form">Mal estado</div>';
    form1 += '</label>';
    form1 += '</div>';
                                
    form1 += '<div style="text-align: left;">';
    form1 += '<input type="hidden" id="DescEqu" name="DescEqu"/>';
                            
    form1 += '<span class="span FWM-span-form">Cantidad:</span>';
    form1 += '<input type="number" class ="FWM-input" id="cantidad" name="cantidad" onchange="equipoLleno(this.id,this.value)"/>';
                            
    form1 += '<span class="span FWM-span-form">Ubicación:</span>';
    form1 += '<input type="text" class="FWM-input" id="ubicacion" name="ubicacion" onchange="equipoLleno(this.id,this.value)"/>';
                            
    form1 += '<span class="span FWM-span-form">Motivo (Tickes):</span>';
    form1 += '<select id="tickets" class="FWM-select" name="tickets" onchange="equipoLleno(this.id,this.value)">';
    form1 += '<option value="0">Seleccione una opción</option>';
    form1 += '<option value="1">Daño del equipo por uso normal</option>';
    form1 += '<option value="2">Equipo dañado por descuido</option>';
    form1 += '<option value="3">Mantenimiento correctivo</option>';
    form1 += '<option value="4">Cambio de equipos (Despachadores de Jabón, Toallero o Higiénico)</option>';
    form1 += '<option value="5">Envío de Rack de 10 o 20 litros y Rack para atomizadores</option>';
    form1 += '</select>';
                            
    form1 += '<span class="span FWM-span-form">Comentario:</span>';
    form1 += '<input type="text" class="FWM-input" id="comentario" name="comentario" onchange="equipoLleno(this.id,this.value)"/>';
    form1 += '</div>';
    form1 += '</form>';
            
    form1 += '<div class="FWM-photo-container">';
    form1 += '<div class="border-capture">';
    form1 += '<a onclick="capturePhoto();">';
    form1 += '<img class="FWM-photo" src="img/camera.svg" id="photoIcon" width="45px"/>';
    form1 += '</a>';
    form1 += '</div>';
    form1 += '<img class="FWM-photo-hide" id="smallImage" src=""/>';
    form1 += '<input type="hidden" id="imagenC" name="imagenC"/>';
    form1 += '</div>';
                
    form1 += '<div class="block-title FWM-subtitulo">Registros guardados</div>';
                
    form1 += '<div class="card data-table">';
    form1 += '<div class="infinite-scroll-content">';
    form1 += '<table id="TabEquipos">';
    form1 += '<thead>';
    form1 += '<tr>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Acciones</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Fotografía</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Codigo</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Descripción</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Cantidad</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Ubicación</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Estatus</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Comentarios</th>';
    form1 += '<th class="numeric-cell" style="text-align: center;background-color: #063E7F;color: white;">Motivo (Ticket)</th>';
    form1 += '</tr>';
    form1 += '</thead>';
    form1 += '<div id="#mostrarP">';
    form1 += '<tbody id="Eq"></tbody>';
    form1 += '</div>';
    form1 += '</table>';
    form1 += '<div class="sentencia preloader color-grey infinite-scroll-preloader"></div>';
    form1 += '</div>';
    form1 += '</div>';
                
    form1 += '<div class="block grid-resizable-demo" style="margin-bottom: 170px;">';
    form1 += '<div class="row align-items-stretch" style="text-align: center;">';
    form1 += '<div class="col-100 medium-50" style="min-width: 50px; border-style: none;">';
    form1 += '<span class="resize-handler"></span>';
    form1 += '<a href="#" onclick="guardarEquipo();" class="boton-equipo">Guardar datos</a>';
    form1 += '</div>';
    form1 += '</div>';
    form1 += '</div>';
    form1 += '</div>';
    form1 += '</div>';
    generateForm1 = $(form1);
    $("#FWM-1").prepend(generateForm1);
    
    var IdC = localStorage.getItem("IdCte");
    var Division = localStorage.getItem("Division");
    if(Division == 3){
        var NomEquipos = 'equipos_cteCDC';
        var NomBusEq = 'EquiposCDC';
    } else {
        var NomEquipos = 'equipos_cte';
        var NomBusEq = 'Equipos';
    }
    app.request.get(cordova.file.dataDirectory + "jsons/"+NomEquipos+".json", function (data) {
        var content = JSON.parse(data);
        select = document.getElementById("codigos");
        for(var i=0; i < content.length; i++){
            if(content[i].IdCte == IdC){
                option = document.createElement("option");
                option.value = content[i].IdPrd;
                option.text = unescape(content[i].IdPrd + "   " + content[i].Descripcion);
                select.appendChild(option);
            }
        }
    });
    var icedula = localStorage.getItem("IdCedula");    
    databaseHandler.db.transaction(
        function(tx1){
            tx1.executeSql(
                "Select * from ced_equipos where IdCedula= ?",
                [icedula],
                function(tx, results){
                    var length = results.rows.length;
                    for(var i = 0; i< length; i++){
                        var item = results.rows.item(i);
                        if(item.Tickets == 1){ 
                            $NT = "Daño del equipo por uso normal";
                        }else if(item.Tickets == 2){
                            $NT = "Equipo dañado por descuido";
                        }else if(item.Tickets == 3){
                            $NT = "Mantenimiento correctivo";
                        }else if(item.Tickets == 4){
                            $NT = "Cambio de equipos (Despachadores de Jabón, Toallero o Higiénico)";
                        }else if(item.Tickets == 5){
                            $NT = "Envío de Rack de 10 o 20 litros y Rack para atomizadores";
                        }else if(item.Tickets != 1 || item.Tickets != 3 || item.Tickets != 3 || item.Tickets != 4 || item.Tickets != 5){
                            $NT = "";
                        }
                        $("#TabEquipos tbody").append("<tr id='fila"+ item.IdCedproductos +"'><td><a href='#' onclick='eliminarFila("+ item.IdCedproductos +",1);' style='border: none; outline:none;'><img src='img/borrar.png' width='30px' /></a><td><img src='"+item.ImgPrd+"' width='60px'/></td><td style='text-align: center;'>" + item.IdPrd + "</td><td style='text-align: center;'>" + unescape(item.Descripcion) + "</td><td style='text-align: center;'>"+ item.Cantidad + "</td><td style='text-align: center;'>" + item.Ubicacion + "</td><td>"+item.checkBox+"</td><td>"+  item.Comentario  +"</td><td>" +  $NT +"</td></tr>");
                    }
                    $('.preloader').remove();
                    $('.infinite-scroll-preloader').remove();
                },
                function(tx, error){
                    console.log("Error al consultar: " + error.message);
                }
            );
            console.log("Consulta correcta");
        },
        function(error){},
        function(){}
    );
    self.autocompleteDropdownAjax = app.autocomplete.create({
        inputEl: '#autocomplete-dropdown-ajax',
        openIn: 'dropdown',
        preloader: true,
        valueProperty: 'IdPrd',
        textProperty:  'Descripcion',
        limit: 5, //limit to 20 results
        dropdownPlaceholderText: 'Seleccionar Producto...',
        source: function (query, render) {
            var autocomplete = this;
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            autocomplete.preloaderShow();
            app.request({
                url: cordova.file.dataDirectory + "jsons/"+NomBusEq+".json",
                method: 'GET',
                dataType: 'json',
                data: {
                query: query,
                },
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Descripcion.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i].IdPrd+"-"+data[i].Descripcion); 
                    }
                    autocomplete.preloaderHide();
                    render(results);
                }
            });
        }
    });
}
function guardarNuevoEquipo(){
    var IdC = localStorage.getItem("IdCte");
    var Division = localStorage.getItem("Division");
    var PCode = $("#PCode").val();
    var PDesc = $("#PDesc").val();
    var r = 0;
    if(Division == 3){
        var NomEquipos = 'equipos_cteCDC';
    } else {
        var NomEquipos = 'equipos_cte';
    }
    if(PCode != ''){
        app.request.get(cordova.file.dataDirectory + "jsons/"+NomEquipos+".json", function (data) {
            var content = JSON.parse(data);
            var x=0;
            var datos = new Array();
            for(var i=0; i < content.length; i++){
                if(content[i].IdCte == IdC){
                    datos[x]= {'Valor':x,'Code':content[i].IdPrd};
                    if(datos[x].Code == PCode){
                        r++;
                    }else{
                    }
                    x++;
                }
            }
            if(r > 0){
                app.dialog.alert('El equipo ya se encuentra en el listado de codigos.', 'Aviso');
                app.preloader.hide();
            }else{
                option = document.createElement("option");
                option.value = PCode;
                option.text = unescape(PCode + "   " + PDesc);
                select.appendChild(option);
                $("#DescEqu").val(PDesc);
                app.dialog.alert('El equipo se agrego al listado de codigos.', 'Aviso');
                app.preloader.hide();
            }
        });
    }else{
        app.dialog.alert('Favor de buscar un producto.', 'Aleta!');
        app.preloader.hide();
    }
}
function llamadasEquipo(id,value){
    codigoChanged();
    DatosEqu()
    equipoLleno(id,value);
}
function equipoLleno(id,value){
    id = "#"+id;
    if (value == "") {
        $(id).css("background-color","#ffffff");
    } else if(value == "0"){
        $(id).css("background-color","#ffffff");
    } else {
        $(id).css("background-color","#E0F8F7");
    }
}
function codigoChanged(){
    var IdC = localStorage.getItem("IdCte");
    var Division = localStorage.getItem("Division");
    if(Division == 3){
        var NomEquipos = 'equipos_cteCDC';
    } else {
        var NomEquipos = 'equipos_cte';
    }
    var cval = $("#codigos").val();
    app.request.get(cordova.file.dataDirectory + "jsons/"+NomEquipos+".json", function (data) {
        var content2 = JSON.parse(data);
        for(var x = 0; x < content2.length; x++) {
            if(content2[x].IdCte == IdC && content2[x].IdPrd == cval){
                $("#ubicacion").val(content2[x].Ubicacion);
                $("#DescEqu").val(content2[x].Descripcion);
            }         
        } 
    });
}
function autocompleteEquipo(){   
    var Division = localStorage.getItem("Division");
    if(Division == 3){
        var NomBusEq = 'EquiposCDC';
    } else {
        var NomBusEq = 'Equipos';
    }
    var cval = $("#autocomplete-dropdown-ajax").val();
    var cod = cval.split('-');
    var co = cod[0];
    app.request.get(cordova.file.dataDirectory + "jsons/"+NomBusEq+".json", function (data) {
        var content2 = JSON.parse(data);
        for(var x = 0; x < content2.length; x++) {
            if(content2[x].IdPrd == co){
                $("#PCode").val(content2[x].IdPrd);
                $("#PDesc").val(content2[x].Descripcion);
                $("#autocomplete-dropdown-ajax").val(content2[x].IdPrd + " - "+content2[x].Descripcion);
            }         
        } 
    });
}
//codigo equipo
function DatosEqu(){
    $("#DescEqu").val($('select[name="codigos"] option:selected').text());
}
//--------- Guardar Equipo ---------------
function guardarEquipo(){
    app.preloader.show('blue');
    var icedula = localStorage.getItem("IdCedula");
    var IdPrd = $("#codigos").val();
    var Descripcion = $("#DescEqu").val();
    var radio = $('input[name=demo-radio]:checked').val();
    var cantidad =  $("#cantidad").val();
    var ubicacion = $("#ubicacion").val();
    var tickets = document.getElementById("tickets").value;
    var comentario = $("#comentario").val();
    var file_data = $('#imagenC').val();
    var fecha = new Date();
    var fFinal = fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate()+" "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();

    if(IdPrd != 0){
        if(radio == 'Equipo en buen estado'){
            databaseHandler.db.transaction(
                function(tx){
                    tx.executeSql(
                        "INSERT INTO ced_equipos (IdCedula,IdPrd , Cantidad , Ubicacion , ImgPrd , checkbox,Comentario , Tickets , FechaRegistro, Descripcion ) VALUES (?,?,?,?,?,?,?,?,?,?)",
                        [icedula, IdPrd, cantidad,ubicacion, file_data, radio, comentario, tickets, fFinal, Descripcion ],
                        function(tx, results){
                            app.preloader.hide();
                            databaseHandler.db.transaction(
                                function(tx){
                                    tx.executeSql(
                                        "Select MAX(IdCedproductos) as Id from ced_equipos",
                                        [],
                                        function(tx, results){
                                            var length = results.rows.length;
                                            var item = results.rows.item(0);
                                            var IdCEq = item.Id;
                                            app.preloader.hide();
                                            //Consultar el producto
                                            databaseHandler.db.transaction(
                                                function(tx){
                                                    tx.executeSql(
                                                        "Select * from ced_equipos where IdCedproductos = ?",
                                                        [IdCEq],
                                                        function(tx, results){
                                                            var length = results.rows.length;
                                                            var item1 = results.rows.item(0);
                                                            if(item1.Tickets == 1){NomTicket = "Da&ntilde;o del equipo por uso normal";}
                                                            if(item1.Tickets == 2){NomTicket = "Equipo da&ntilde;ado por descuido";}
                                                            if(item1.Tickets == 3){NomTicket = "Mantenimiento correctivo";}
                                                            if(item1.Tickets == 4){NomTicket = "Cambio de equipos (Despachadores de Jabón, Toallero o Higiénico)";}
                                                            if(item1.Tickets == 5){NomTicket = "Envío de Rack de 10 o 20 litros y Rack para atomizadores";}
                                                            if(item1.Tickets == ''){NomTicket = "";}
       
                                                            $("#smallImage").attr("src","img/blank.png");
                                                            $("#DescEqu").val("");
                                                            $("#cantidad").val("");
                                                            $("#ubicacion").val("");
                                                            $("#comentario").val("");
                                                            $('#imagenC').val("");
                                                            $("#photoIcon").attr("src","img/camera.svg");
                                                            $("#TabEquipos tbody").append("<tr id='fila"+ item1.IdCedproductos +"'><td><a href='#' onclick='eliminarFila("+ item1.IdCedproductos +", 1);' style='border: none; outline:none;'><img src='img/borrar.png' width='30px' /></a></td><td><img src='"+item1.ImgPrd+"' width='60px'/></td><td text-align: center;>" + item1.IdPrd + "</td><td text-align: center;>"+unescape(item1.Descripcion)+"</td><td text-align: center;>"+ item1.Cantidad + "</td><td text-align: center;>" + item1.Ubicacion + "</td><td text-align: center;>"+ radio+"</td><td text-align: center;>"+ item1.Comentario+"</td><td text-align: center;>"+ NomTicket + "</td></tr>");
                                                            $("#codigos").css("background-color", "#FFFFFF");
                                                            $("#cantidad").css("background-color", "#FFFFFF");
                                                            $("#ubicacion").css("background-color", "#FFFFFF");
                                                            $("#comentario").css("background-color", "#FFFFFF");
                                                                        
                                                            document.getElementById("Bradio").checked = false;
                                                            document.getElementById("Mradio").checked = false

                                                            document.getElementById("tickets").value = "0";
                                                            $(".tickets").css("background-color", "#FFFFFF");
                                                            document.getElementById("codigos").value = "0";

                                                            $('.preloader').remove();
                                                            $('.infinite-scroll-preloader').remove();
                                                            app.preloader.hide();
                                                        },
                                                        function(tx, error){
                                                            console.log("Error al guardar cedula: " + error.message);
                                                            app.preloader.hide();
                                                        }
                                                    );
                                                },
                                                function(error){},
                                                function(){}
                                            );
                                                        //Fin de consulgtar el producto
                                        },
                                        function(tx, error){
                                            console.log("Error al guardar cedula: " + error.message);
                                            app.preloader.hide();
                                        }
                                    );
                                },
                                function(error){},
                                function(){}
                            ); //FIN DE Extraer el ultimo registro
                            app.dialog.alert('El registro se guardo correctamente.', 'Aviso');
                            app.preloader.hide();
                        },
                        function(tx, error){
                            console.log("Error al guardar el equipo: " + error.message);
                            app.preloader.hide();
                        }
                    );
                },
                function(error){},
                function(){}
            );
        }else if(radio == 'Equipo en mal estado'){
                if(cantidad != ""){
                    if(ubicacion != ""){
                        if(tickets != 0){
                            //if(file_data != ""){
                                databaseHandler.db.transaction(
                                    function(tx){
                                        tx.executeSql(
                                            "INSERT INTO ced_equipos (IdCedula,IdPrd , Cantidad , Ubicacion , ImgPrd , checkbox,Comentario , Tickets , FechaRegistro, Descripcion ) VALUES (?,?,?,?,?,?,?,?,?,?)",
                                            [icedula, IdPrd, cantidad, ubicacion, file_data, radio, comentario, tickets, fFinal, Descripcion ],
                                            function(tx, results){
                                        //Extraer el ultimo registro
                                        app.preloader.hide();
                                            databaseHandler.db.transaction(
                                            function(tx){
                                                tx.executeSql(
                                                    "Select MAX(IdCedproductos) as Id from ced_equipos",
                                                    [],
                                                    function(tx, results){
                                                        var length = results.rows.length;
                                                        var item = results.rows.item(0);
                                                        var IdCEq = item.Id;
                                                        app.preloader.hide();
                                                        //Consultar el producto
                                                        databaseHandler.db.transaction(
                                                            function(tx){
                                                                tx.executeSql(
                                                                    "Select * from ced_equipos where IdCedproductos = ?",
                                                                    [IdCEq],
                                                                    function(tx, results){
                                                                        var length = results.rows.length;
                                                                        var item1 = results.rows.item(0);
                                                                        if(item1.Tickets == 1){NomTicket = "Da&ntilde;o del equipo por uso normal";}
                                                                        if(item1.Tickets == 2){NomTicket = "Equipo da&ntilde;ado por descuido";}
                                                                        if(item1.Tickets == 3){NomTicket = "Mantenimiento correctivo";}
                                                                        if(item1.Tickets == 4){NomTicket = "Cambio de equipos (Despachadores de Jabón, Toallero o Higiénico)";}
                                                                        if(item1.Tickets == 5){NomTicket = "Envío de Rack de 10 o 20 litros y Rack para atomizadores";}
                                                                        if(item1.Tickets == ''){NomTicket = "";}
                                                                        
                                                                        $("#smallImage").attr("src","img/blank.png");
                                                                        $("#photoIcon").attr("src","img/camera.svg");
                                                                        $("#DescEqu").val("");
                                                                        $("#cantidad").val("");
                                                                        $("#ubicacion").val("");
                                                                        $("#comentario").val("");
                                                                        $('#imagenC').val("");
                                                                        $("#TabEquipos tbody").append("<tr id='fila"+ item1.IdCedproductos +"'><td><a href='#' onclick='eliminarFila("+ item1.IdCedproductos +", 1);' style='border: none; outline:none;'><img src='img/borrar.png' width='30px' /></a></td><td><img src='"+item1.ImgPrd+"' width='60px'/></td><td text-align: center;>" + item1.IdPrd + "</td><td text-align: center;>"+unescape(item1.Descripcion)+"</td><td text-align: center;>"+ item1.Cantidad + "</td><td text-align: center;>" + item1.Ubicacion + "</td><td text-align: center;>"+ radio+"</td><td text-align: center;>"+ item1.Comentario+"</td><td text-align: center;>"+ NomTicket + "</td></tr>");
                                                                        $("#codigos").css("background-color", "#FFFFFF");
                                                                        $("#cantidad").css("background-color", "#FFFFFF");
                                                                        $("#comentario").css("background-color", "#FFFFFF");
                                                                        $("#ubicacion").css("background-color", "#FFFFFF");

                                                                        document.getElementById("Bradio").checked = false;
                                                                        document.getElementById("Mradio").checked = false;

                                                                        document.ready = document.getElementById("codigos").value = '0';
                                                                        document.ready = document.getElementById("tickets").value = '0';

                                                                        $('.preloader').remove();
                                                                        $('.infinite-scroll-preloader').remove();
                                                                        app.preloader.hide();
                                                                    },
                                                                    function(tx, error){
                                                                        console.log("Error al guardar cedula: " + error.message);
                                                                        app.preloader.hide();
                                                                    }
                                                                );
                                                            },
                                                            function(error){},
                                                            function(){}
                                                        );
                                                        //Fin de consulgtar el producto
                                                    },
                                                    function(tx, error){
                                                        console.log("Error al guardar cedula: " + error.message);
                                                        app.preloader.hide();
                                                    }
                                                );
                                            },
                                            function(error){},
                                            function(){}
                                        ); //FIN DE Extraer el ultimo registro
                                        app.dialog.alert('El registro se guardo correctamente.', 'Aviso');
                                        app.preloader.hide();
                                        },
                                        function(tx, error){
                                            console.log("Error al guardar el equipo: " + error.message);
                                            app.preloader.hide();
                                        }
                                    );
                                },
                                function(error){},
                                function(){}
                            );
                            /*}else{
                                app.dialog.alert('El campo: Fotograf\u00eda. Es requerido.', 'Aviso');
                                app.preloader.hide();
                            }*/
                        }else{
                            app.dialog.alert('Seleccione un motivo(Ticket).', 'Aviso');
                            app.preloader.hide();
                        }
                    }else{
                        app.dialog.alert('El campo: Ubicaci\u00f3n. Es requerido.', 'Aviso');
                        app.preloader.hide();
                    }
                }else{
                    app.dialog.alert('El campo: Cantidad. Es requerido.', 'Aviso');
                    app.preloader.hide();
                }
            }else{
                app.dialog.alert('Seleccione el estado del equipo.', 'Aviso');
                app.preloader.hide();
            }
    }else{
        app.dialog.alert('Seleccione un codigo.', 'Aviso');
        app.preloader.hide();
    }
}
// Constructor de elementos FWM
function constructorHandler(form){
    if(form == "menu"){
        generateMenu();
    } else if (form == "FWM-1") {
        generateForm1();
    } else {
        alert("No es el menu")
    }
}






