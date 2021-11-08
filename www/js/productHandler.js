var productHandler={
    addCedulayb: function(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into cedulas_general(id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus) values(?,?,?,?,?,?,?,?)",
                    [id_usuario,nombre_usuario,fecha_entrada,geolocalizacion_entrada,id_cliente,nombre_cliente,horario_programado,estatus],
                    function(tx, results){
                        // console.log("Registro de cedula creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error registrar cedula general:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamiento: function(id_cedula,foto_entrada,nombre_cliente,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_servicio(id_cedula,foto_entrada,nombre_cliente,direccion) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,direccion],
                    function(tx, results){
                        // console.log("Registro de levantamiento creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addFumigacion: function(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into fumigacion(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar,alcance_servicio],
                    function(tx, results){
                        // console.log("Registro de fumigacion creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addSanitizacion: function(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into sanitizacion(id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar) values(?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,sucursal,direccion,persona_recibe,documento_ingresar],
                    function(tx, results){
                        // console.log("Registro de sanitizacion creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //SMC
    addLevantamientoSMC: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_smc(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de levantamiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamientoSMCC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_smc(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de levantamiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addVentaSMC: function(id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into ventaSMC(id_cedula,foto_entrada,nombre_cliente,rfc_cliente,nombre_contacto,telefono_contacto,correo_contacto,tipo_visita) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio],
                    function(tx, results){
                        // console.log("Registro de ventas SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addEquipoSMC: function(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_equipo_smc(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos) values(?,?,?,?,?,?,?)",
                    [id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos],
                    function(tx, results){
                        // console.log("Registro de equipo SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addEquipoSMC2: function(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into datos_servicio_smc(id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos) values(?,?,?,?,?,?,?)",
                    [id_cedula,marca,tipo_motor,marca_motor,modelo,serie,aditamentos],
                    function(tx, results){
                        // console.log("Registro de equipo SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addServicioSMC: function(id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into servicioSMC(id_cedula,foto_entrada,nombre_cliente,rfc_cliente,nombre_contacto,telefono_contacto,correo_contacto,tipo_visita) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,RFC,nombrecontacto,telefono,correo,tiposervicio],
                    function(tx, results){
                        // console.log("Registro de servicio SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar ventas SMC:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoSMC: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_smc(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de mantenimiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoSMCC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_smc(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de mantenimiento SMC creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //SMC FIN
    //FIELD INICIO
    addLevantamientoField: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_Field(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addLevantamientoFieldC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into levantamiento_Field(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de levantamiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoField: function(id_cedula,foto_entrada,nombre_cliente){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_Field(id_cedula,foto_entrada,nombre_cliente) values(?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente],
                    function(tx, results){
                        // console.log("Registro de mantenimiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMantenimientoFieldC: function(id_cedula,foto_entrada,nombre_cliente,orden_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into mantenimiento_Field(id_cedula,foto_entrada,nombre_cliente,orden_servicio) values(?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,orden_servicio],
                    function(tx, results){
                        // console.log("Registro de mantenimiento Field creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar levantamiento:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    //FIELD FIN
    addReporteTecnico: function(id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,correo){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into servicio_tecnico(id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,email) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,direccion,telefono,atencion,correo],
                    function(tx, results){
                        // console.log("Registro de Reporte Tecnico creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el Reporte del Tecnico:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addMinutaCoordinador: function(id_cedula,foto_entrada){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into minuta_coordinador(id_cedula,foto_entrada) values(?,?)",
                    [id_cedula,foto_entrada],
                    function(tx, results){
                        // console.log("Registro la minuta del coordinador exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar la minuta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },    
    addMinutaCoordinadorr: function(id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into minuta_coordinador(id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion) values(?,?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,empresa,coordinador_obra,nombre_cliente,proyecto,coordonador,direccion],
                    function(tx, results){
                        // console.log("Registro la minuta del coordinador exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar la minuta:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addBennetts: function (id_usuario, nombre_usuario, fecha_llegada, geolocation, horario_programado, estatus) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into cedulas_general(id_usuario, nombre_usuario, fecha_entrada,nombre_cliente, geolocalizacion_entrada, horario_programado, estatus) values(?,?,?,?,?,?,?)",
              [id_usuario,nombre_usuario,fecha_llegada,fecha_llegada,geolocation,horario_programado,estatus],
              function (tx, results) {
                // console.log("Registro de cedula creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addBennettsDatos: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into datos_productos(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
    
          function () {}
        );
    },
    addConteo: function (id_cedula) {
        databaseHandler.db.transaction(
          function (tx) {
            tx.executeSql(
              "insert into inventario(id_cedula) values(?)",
              [id_cedula],
              function (tx, results) {
                // console.log("Registro de datos producto creado exitosamente");
              },
              function (tx, error) {
                console.error("Error registrar:" + error.message);
              }
            );
          },
          function (error) {
              console.log(error)
          },
          function () {}
        );
    },
    //TODO SURO
    addSanitizacionSURO: function(id_cedula,foto_entrada,nombre_cliente,nombre_usuario,sucursal,direccion, correo){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into sanitizacion_Suro(id_cedula,foto_entrada,nombre_cliente, nombre_usuario,sucursal,direccion,correo) values(?,?,?,?,?,?,?)",
                    [id_cedula,foto_entrada,nombre_cliente,nombre_usuario,sucursal,direccion,correo],
                    function(tx, results){
                        // console.log("Registro de sanitizacion SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar sanitización SURO: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    groupInit: function(id_cedula){
        var nombre_grupo = "Grupo 1";
        var indice = 1;
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into grupos(id_cedula,nombre_grupo,fases,indice) values(?,?,'durante',?)",
                    [id_cedula,nombre_grupo, indice],
                    function(tx, results){
                        // console.log("Registro de grupo 1 SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el grupo 2:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
        var fases = "fomites";
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into grupos(id_cedula,nombre_grupo,fases,indice) values(?,?,?,?)",
                    [id_cedula,nombre_grupo,fases, indice],
                    function(tx, results){
                        // console.log("Registro de grupo 2 SURO creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar el grupo 2:" + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    // Serv
    addCheckServInd: function(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into checklist(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion) values(?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,tienda,direccion],
                    function(tx, results){
                        // console.log("Registro de check list ServInd creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar checklist ServInd: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addreporteGeneral: function(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into reporteGeneral(id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,orden_servicio,foto_entrada,nombre_cliente,nombre_comercial,sucursal,direccion,ciudad,telefono,correo,equipo,marca,modelo,serie,tipo_servicio,razon_servicio],
                    function(tx, results){
                        // console.log("Registro de reporte general ServInd creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar checklist ServInd: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    addreporteFotografico: function(id_cedula,id_visita,foto_llegada,orden_compra,proyecto,sucursal,contratista,type_proyect,region,torre,proceso){
        databaseHandler.db.transaction(
            function(tx){
                tx.executeSql(
                    "insert into reporteFotografico(id_cedula,id_visita,foto_entrada,orden_compra,nombre_cliente,sitio,contratista,tipo_proyecto,region,torre,proceso) values(?,?,?,?,?,?,?,?,?,?,?)",
                    [id_cedula,id_visita,foto_llegada,orden_compra,proyecto,sucursal,contratista,type_proyect,region,torre,proceso],
                    function(tx, results){
                        console.log("Registro de reporte Fotografico MerGroup creado exitosamente");
                    },
                    function(tx, error){
                        console.error("Error al registrar Fotografico Mer: " + error.message);
                    }
                );
            },
            function(error){},
            function(){}
        );
    },
    SERVFotos: function (id_cedula, Recorrido, Proceso, titulo, fechah, foto) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into SV_Fotos(SV_ID_Cedula, SV_Recorrido, SV_Proceso, SV_titulo, SV_FechaHora, SV_Foto) values(?,?,?,?,?,?)",
                    [id_cedula, Recorrido, Proceso, titulo, fechah, foto],
                    function (tx, results) {
                        
                    },
                    function (tx, error) {
                        console.error("Error al registrar SV_Fotos: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    //Plato Limpio
    addPL: function (id_cedula, Empresa, correo) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into DG_PlatoL(DG_ID_Cedula,DG_Empresa,DG_Correo) values(?,?,?)",
                    [id_cedula, Empresa, correo],
                    function (tx, results) {
                        //console.log("Registro de DG_PlatoL exitosamente");
                    },
                    function (tx, error) {
                        console.error("Error al registrar DG_PlatoL: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
    PLFotos: function (id_cedula, Recorrido, Proceso, titulo, fechah, foto) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into PL_Fotos(F_ID_Cedula,F_Recorrido,F_Proceso,F_titulo,F_FechaHora,F_Foto) values(?,?,?,?,?,?)",
                    [id_cedula, Recorrido, Proceso, titulo, fechah, foto],
                    function (tx, results) {
                        //console.log("Registro de PL_Fotos exitosamente");
                    },
                    function (tx, error) {
                        console.error("Error al registrar PL_Fotos: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    }
};