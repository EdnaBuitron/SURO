var databaseHandler = {
    db: null,
    createDatabase: function(){
        this.db = window.sqlitePlugin.openDatabase({name: 'field.db', location: 'default', androidDatabaseProvider: 'system'});
        this.db.transaction(
            function(tx){
                // General
                tx.executeSql(
                    "create table if not exists Actualizaciones (idActualizacion integer primary key,IdUsuario integer, Fecha text)",
                    [],
                    function(tx, results){
                        // console.log("Se creo Actualizaciones correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de cedulas_general: " + error.message);
                    }
                );
                tx.executeSql(
                    "create table if not exists cedulas_general(id_cedula integer primary key,tipo_cedula text,id_usuario integer,nombre_usuario text,fecha_entrada text,geolocalizacion_entrada text,id_cliente text,nombre_cliente text,horario_programado text,calificacion text,fecha_salida text,geolocalizacion_salida text,estatus integer,comentario_cliente text,nombre_evalua text)",
                    [],
                    function(tx, results){
                        // console.log("Se creo cedulas_general correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de cedulas_general: " + error.message);
                    }
                );
                var empresa = localStorage.getItem("nombre_empresa");
                // Levantamiento
                tx.executeSql(
                    "create table if not exists levantamiento_servicio(id_levantamiento integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,direccion text,colonia text,revision text,grado_infeccion integer,descripcion text,comentarios_tecnico text, firma_cliente blob,fecha_cliente text,foto_salida blob)",
                    [],
                    function(tx, results){
                        // console.log("Se creo levantamiento de servicios correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento_servicio: " + error.message);
                    }
                );
                tx.executeSql(
                    "create table if not exists levantamiento_evidencia(id_levantamiento_foto integer primary key,id_cedula integer,area text, foto_plaga blob,descripcion_plaga text,observacion text,fecha_regristro text)",
                    [],
                    function(tx, results){
                        // console.log("Se creo levantamiento correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento: " + error.message);
                    }
                );
                // Fumigacion
                tx.executeSql(
                    "create table if not exists fumigacion(id_fumigacion integer primary key,id_cedula integer,foto_entrada blob,sucursal text,direccion text,persona_recibe text,documento_ingresar text,alcance_servicio text,foto_quimico blob,foto_equipo blob,descripcion_antes text,descripcion_durante text,descripcion_despues text,foto_reporte blob,producto_utilizado text,tipo_aplicacion integer,descripcion_tipo text,grado_infestacion integer,descripcion_infestacion text,mantenimiento integer,detalle_mantenimiento text,recomendaciones text,firma_evalua blob,fecha_firma text,comentario_cliente text,foto_salida blob)",
                    [],
                    function(tx, results){
                        // console.log("Se creo fumigacion correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento: " + error.message);
                    }
                );
                tx.executeSql(
                    "create table if not exists fotos_fumigacion(id_fumigacion_foto integer primary key,id_cedula integer,fase integer,foto_area blob,nombre_area text,fecha_foto text)",
                    [],
                    function(tx, results){
                        // console.log("Se creo fotos fumigacion correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento: " + error.message);
                    }
                );
                // Sanitizacion
                tx.executeSql(
                    "create table if not exists sanitizacion(id_sanitizacion integer primary key,id_cedula integer,foto_entrada blob,sucursal text,direccion text,persona_recibe text,documento_ingresar text,descripcion_antes text,foto_quimico blob,foto_equipo blob,areas_despejadas integer,descripcion_durante text,descripcion_despues text,foto_reporte blob,recomendaciones text,firma_evalua blob,fecha_firma text,foto_salida blob)",
                    [],
                    function(tx, results){
                        // console.log("Se creo sanitizacion correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento: " + error.message);
                    }
                );
                tx.executeSql(
                    "create table if not exists fotos_sanitizacion(id_sanitizacion_foto integer primary key,id_cedula integer,fase integer,foto_area blob,nombre_area text,fecha_foto text)",
                    [],
                    function(tx, results){
                        // console.log("Se creo fotos sanitizacion correctamente!");
                    },
                    function(tx, error){
                        console.error("Error al crear la tabla de levantamiento: " + error.message);
                    }
                );
                
                if(empresa == "DIPREC"){
                    tx.executeSql(
                        "create table if not exists servicio_tecnico(id_servicio integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,atencion text,documento_ingresar text,direccion text,telefono text,email text,tipo_servicio text,firma_cliente blob,fecha_cliente text,foto_salida blob,puesto text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Servicio tecnico DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists datos_equipo(id_equipo integer primary key,id_cedula integer,equipo text,marca text,modelo text,no_serie text,fecha_registro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos del equipo DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists evidencia_equipo(id_foto integer primary key,fase text,id_cedula integer,foto blob,equipo text,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia del equipo DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists datos_equipo_antes(id_datos integer primary key,id_cedula integer,equipo text,voltaje text,estado_voltaje text,evidencia_voltaje blob,corriente text,estado_corriente text,evidencia_corriente text,fases text,estado_fase text,evidencia_fase text,tipo_gas text,estado_gas text,evidencia_gas text,presion_gas text,estado_presion_gas text,evidencia_presion_gas blob,presion_vapor text,estado_presion_vapor text,evidencia_presion_vapor blob,temperatura text,estado_temperatura text,evidencia_estado_temperatura blob,falla_reportada text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos del equpo - antes DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists evidencia_refacciones(id_foto integer primary key,id_cedula integer,fase text,clave text,cantidad text,descripcion text,foto blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia de refacciones DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists check_list(id_check integer primary key,id_cedula integer,equipo text,gabinete_exterior integer,gabinete_interior integer,quemadores integer,paneles integer,parillas integer,vulvas_espreas integer,paneles_control integer,condensador integer,evaporador integer,motores integer,compresor integer,flautas integer,sistema_hidraulico integer,sistema_lavado integer,empaques integer,dereccion_fugas integer,ajuste_electrico integer,libricacion integer,revision_operacion integer,filtro_aire integer)",
                        [],
                        function(tx, results){
                            // console.log("Se creo check list DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists check_list2(id_check2 integer primary key,id_cedula integer,equipo text,vulvas integer,termostato integer,control_presion integer,sensor_flama integer,quemadores integer,turbinas integer,resistencias integer,sondas integer,tarjeta_electronica integer,compresor integer,motor_difusores ineger,aspas integer,contractores integer,fuga_tuberia integer,aislante_tuberia integer,condfensador integer,iluminacion integer,empaques integer,fuga integer)",
                        [],
                        function(tx, results){
                            // console.log("Se creo check list2 DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists datos_equipo_despues(id_datos integer primary key,id_cedula integer,equipo text,voltaje text,estado_voltaje text,evidencia_voltaje blob,corriente text,estado_corriente text,evidencia_corriente text,fases text,estado_fase text,evidencia_fase text,tipo_gas text,estado_gas text,evidencia_gas text,presion_gas text,estado_presion_gas text,evidencia_presion_gas blob,presion_vapor text,estado_presion_vapor text,evidencia_presion_vapor blob,temperatura text,estado_temperatura text,evidencia_estado_temperatura blob,falla_reportada text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos del equipo - Despues correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists minuta_coordinador(id_servicio integer primary key,id_cedula integer,foto_entrada blob,empresa text,coordinador_obra text,nombre_cliente text,proyecto text,coordonador text,direccion text,firma_cliente blob,fecha_cliente text,foto_salida blob,puesto text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo minuta coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists zonas_coordinador(id_zona integer primary key,id_cedula integer,nombre text,foto blob,fecha_registro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo zonas coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists equipos_coordinador(id_equipo integer primary key,id_cedula integer,zona text,equipo text,foto blob,fecha_registro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo equipos coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    
                    tx.executeSql(
                        "create table if not exists datos_coordinador(id_dato integer primary key,id_cedula integer,zona text,equipo text,voltaje text,estado_voltaje text,evidencia_voltaje blob,corriente text,estado_corriente text,evidencia_corriente text,fases text,estado_fase text,evidencia_fase text,tipo_gas text,estado_gas text,evidencia_gas text,presion_gas text,estado_presion_gas text,evidencia_presion_gas blob,presion_vapor text,estado_presion_vapor text,evidencia_presion_vapor blob,temperatura text,estado_temperatura text,evidencia_temperatura text,evidencia_estado_temperatura text,falla_reportada text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists observaciones(id_acuerdo integer primary key,id_cedula integer,acuerdo text,foto blob,fecha_registro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo observaciones coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    
                    tx.executeSql(
                        "create table if not exists notas(id_nota integer primary key,id_cedula integer,nota text,foto blob,fecha_registro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo notas coordinador DIPREC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                }
                if(empresa == "SMC"){
                    //Levantamiento SMC
                    tx.executeSql(
                        "create table if not exists levantamiento_smc(id_levantamiento integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto text,orden_servicio text,marca text,modelo text,numero_serie text,tipo_motor text,tipo_boquilla text,tipo_combustible text,tipo_mastil text,comentario_equipo text,lugar_reparacion integer,reparo_visita text, firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo levantamiento SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    ///Fotos de levantamiento SMC
                    tx.executeSql(
                        "create table if not exists evidencia_levantamiento_smc(id_evidencia integer primary key,id_cedula integer,observacion text, foto_observacion blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Evidencia levantamiento SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de levantamiento SMC: " + error.message);
                        }
                    );
                    //Mantenimiento SMC
                    tx.executeSql(
                        "create table if not exists mantenimiento_smc(id_levantamiento integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto text,tipo_servicio integer,orden_servicio text,marca text,modelo text,numero_serie text,foto_equipo blob, firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo mantenimiento SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    ///Fotos de mantenimiento SMC
                    tx.executeSql(
                        "create table if not exists evidencia_mantenimiento_smc(id_evidencia integer primary key,id_cedula integer,fase text,descripcion text, foto_decripcion blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia mantenimiento SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de levantamiento SMC: " + error.message);
                        }
                    );
                    //Ventas SMC
                    tx.executeSql(
                        "create table if not exists ventaSMC(id_venta integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,rfc_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto integer,tipo_visita text,comentario_antes text,comentario_despues text,observaciones_prospeccion text,estado_monta text,numero_monta text,tipo_monta text,marca text,mantenimiento text,objetivo_prospeccion text,necesidad_prospeccion text,marca_montacargas_prospeccion text,numero_montacargas_prospeccion text,status_montacarga_prospeccion integer,venc_contrato text,marca_llantas_prospeccion text,tipo_llantas_prospeccion text,mediadas_prospeccion text,resolvio_prospeccion integer,por_que_prospeccion text,vista_prospeccion integer,cuando_prospeccion text,presente_prospeccion integer,cuales_prospeccion text,copetencia_prospeccion text,sugerencia_prospeccion text,comentarios_prospeccion text,no_activo text,no_contrato text,firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo venta smc correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de ventaSMC: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists evidencia_venta_smc(id_evidencia integer primary key,id_cedula integer,fase text,foto blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia venta SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de venta SMC: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists datos_equipo_smc(id_equipo integer primary key,id_cedula integer,marca text,tipo_motor text,marca_motor text,modelo text,serie text,aditamentos text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos de equipo SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de datos de equipo SMC: " + error.message);
                        }
                    );
                    //Servicio
                    tx.executeSql(
                        "create table if not exists servicioSMC(id_venta integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,rfc_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto integer,tipo_visita text,comentario_antes text,comentario_despues text,observaciones_prospeccion text,estado_monta text,numero_monta text,tipo_monta text,marca text,mantenimiento text,no_activo text,no_contrato text,firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo venta smc correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de ventaSMC: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists evidencia_servicio_smc(id_evidencia integer primary key,id_cedula integer,fase text,foto blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia venta SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de venta SMC: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists datos_servicio_smc(id_equipo integer primary key,id_cedula integer,marca text,tipo_motor text,marca_motor text,modelo text,serie text,aditamentos text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo datos de equipo SMC correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de datos de equipo SMC: " + error.message);
                        }
                    );
                }
                if(empresa == "Field"){
                    //Levantamiento SMC
                    tx.executeSql(
                        "create table if not exists levantamiento_Field(id_levantamiento integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto text,orden_servicio text,marca text,modelo text,numero_serie text,tipo_motor text,tipo_boquilla text,tipo_combustible text,tipo_mastil text,comentario_equipo text,lugar_reparacion integer,reparo_visita text, firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo levantamiento Field correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_smc: " + error.message);
                        }
                    );
                    ///Fotos de levantamiento Field
                    tx.executeSql(
                        "create table if not exists evidencia_levantamiento_Field(id_evidencia integer primary key,id_cedula integer,observacion text, foto_observacion blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Evidencia levantamiento Field correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de levantamiento Field: " + error.message);
                        }
                    );
                    //Mantenimiento SMC
                    tx.executeSql(
                        "create table if not exists mantenimiento_Field(id_levantamiento integer primary key,id_cedula integer,foto_entrada blob,nombre_cliente text,nombre_contacto text,telefono_contacto text,correo_contacto text,tipo_servicio integer,orden_servicio text,marca text,modelo text,numero_serie text,foto_equipo blob, firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx, results){
                            // console.log("Se creo mantenimiento Field correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de levantamiento_Field: " + error.message);
                        }
                    );
                    ///Fotos de mantenimiento SMC
                    tx.executeSql(
                        "create table if not exists evidencia_mantenimiento_Field(id_evidencia integer primary key,id_cedula integer,fase text,descripcion text, foto_decripcion blob,fecha_regristro text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo evidencia mantenimiento Field correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de evidencia de levantamiento Field: " + error.message);
                        }
                    );
                }
                if(empresa == "Bennetts"){
                    tx.executeSql(
                        "create table if not exists datos_productos(id_producto integer primary key, id_cedula integer, puesto text, firma_cliente blob, correo text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Productos bennetts correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de cedulas_general: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists productos(id_producto integer primary key, id_cedula integer, codigo_producto text, descripcion_producto text, cantidad_producto integer, aplica text, motivo text, evidencia_foto_antes blob, evidencia_foto_despues blob, fecha text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Productos bennetts correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de cedulas_general: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists inventario(id_inventario integer primary key,id_cedula integer,id_conteo_general integer,numero_conteo integer,empresa text,pareja_almacen text,almacen text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Inventario bennetts correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de inventario bennetts: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists conteo(id_conteo integer primary key,id_cedula integer,id_conteo_general integer,numero_conteo integer,codigo_proveedor text,codigo_sap text,ubicacion text,descripcion text,inventario text,familia text,costo_unitario text,usuario text,estatus_diferencia text,fisico text,enviado text)",
                        [],
                        function(tx, results){
                            // console.log("Se creo Conteo bennetts correctamente!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla de conteo bennetts: " + error.message);
                        }
                    );
                }
                if(empresa == "SURO"){
                    tx.executeSql(
                       "create table if not exists evidencia(id_evidencia integer primary key,id_cedula integer, nombre_grupo text,foto_evidencia blob,fases text,fecha_foto text)",
                       [],
                       function(tx, results){
                        //    console.log("Se creó evidencia SURO correctamente!");
                       },
                       function(tx, error){
                           console.error("Error al crear la tabla evidencia: " + error.message);
                       }
                   );
                   //GRUPOS SURO
                   tx.executeSql(
                       "create table if not exists grupos(id_grupo integer primary key,id_cedula integer,nombre_grupo text, fases text, indice integer)",
                       [],
                       function(tx, results){
                        //    console.log("Se creo grupos SURO correctamente!");
                       },
                       function(tx, error){
                           console.error("Error al crear la tabla grupos SURO: " + error.message);
                       }
                   );
                     //SANITIZACIÓN SURO
                     tx.executeSql(
                       "create table if not exists sanitizacion_Suro(id_sanitizacion integer primary key,id_cedula integer,nombre_cliente text, foto_entrada blob, sucursal text, direccion text, correo text, nombre_usuario text, foto_epp blob, foto_maquina blob, foto_aspersor blob, foto_quimico blob, foto_accesos blob, foto_delimita_area blob, fecha_foto_epp text, fecha_foto_maquina text, fecha_foto_aspersor text, fecha_foto_quimico text, fecha_foto_acceso text, fecha_foto_area text,firma_cliente blob,fecha_cliente text,foto_salida blob,puesto text)",
                       [],
                       function(tx, results){
                        //    console.log("Se creo sanitización SURO correctamente!");
                       },
                       function(tx, error){
                           console.error("Error al crear la tabla sanitización SURO: " + error.message);
                       }
                   );

               }
               if(empresa == "MerGroup"){
                    tx.executeSql(
                        "Create table if not exists reporteFotografico(id_reporte integer primary key,id_cedula integer,id_visita integer,foto_entrada blob,orden_compra text,nombre_cliente text,sitio text,contratista text,tipo_proyecto text,region text,torre text,proceso text,foto_salida blob,firma_cliente blob,fecha_cliente text)",
                        [],
                        function(tx,results){
                            // console.log("Se creo reporte Fotografico MerGroup correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla checklist serv")
                        }                
                    );
                    tx.executeSql(
                        "Create table if not exists evidenciaFotografica(id_evidencia integer primary key,id_cedula integer,titulo text,observacion text,foto blob,fecha_registro text)",
                        [],
                        function(tx,results){
                            console.log("Se creo evidencia Fotografica MerGroup correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla de evidencia MerGroup serv")
                        }                
                    ); 
               }
               if(empresa == "ServInd"){
                    // Checklist
                    tx.executeSql(
                        "Create table if not exists checklist(id_checklist integer primary key,id_cedula integer,id_visita integer,orden_servicio text,foto_entrada blob,nombre_cliente text,nombre_comercial text,sucursal text,tienda text,direccion text,modelo text,serie text,voltaje text,amperaje text,breaker text,presion text,dinamica text,estatica text,amp1 text,amp2 text,amp3 text,amp4 text,amp5 text,amp6 text,amp7 text,amp8 text,temperatura text,nivel text,magneto text,magnetron text,transformadorhv text,diodohv text,capacitorhv text,firma_cliente blob,fecha_cliente text,foto_salida blob)",
                        [],
                        function(tx,results){
                            // console.log("Se creo check list Serv correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla checklist serv")
                        }                
                    ); 
                    tx.executeSql(
                        "Create table if not exists selectcheck(id_select integer primary key,id_cedula integer,fase text,opcion text,valor text)",
                        [],
                        function(tx,results){
                            // console.log("Se creo select list Serv correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla selectcheck serv")
                        }                
                    ); 
                    //Reporte General
                    tx.executeSql(
                        "Create table if not exists reporteGeneral(id_reportegeneral integer primary key,id_cedula integer,id_visita integer,foto_entrada blob,firma_cliente blob,fecha_cliente text,orden_servicio text,nombre_cliente text,nombre_comercial text,sucursal text,folio_interno text,direccion text,telefono text,correo text,equipo text,marca text,modelo text,serie text,tipo_servicio text,ciudad text,voltaje text,amp text,wc text,tierra_fisica text,razon_servicio text,trabajo_realizado text,equipo_encontrado text,diagnostico text,estatus_reporte text,equipo_entrego text,comentario text,horas_activas text,horas_viaje text,horas_espera text,horas_totales text,cotizacion text,viaticos text,refacciones text,foto_salida blob)",
                        [],
                        function(tx,results){
                            // console.log("Se creo reporte General Serv correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla checklist serv")
                        }                
                    );
                    tx.executeSql(
                        "Create table if not exists evidenciasReporte(id_evidencia integer primary key,id_cedula integer,fase integer,titulo text,foto blob,fecha_registro text)",
                        [],
                        function(tx,results){
                            // console.log("Se creo evidencia reporte general Serv correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla checklist serv")
                        }                
                    ); 
                    tx.executeSql(
                        "Create table if not exists equiposReporte(id_equipo integer primary key,id_cedula integer,origin integer,numero_parte text,descripcion text,prioridad text,cantidad text,fecha_registro text)",
                        [],
                        function(tx,results){
                            // console.log("Se creo equipos reporte general Serv correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla checklist serv")
                        }                
                    ); 
                    tx.executeSql(
                        "Create table if not exists SV_Fotos(SV_ID_Fotos integer primary key,SV_ID_Cedula integer, SV_Recorrido integer,SV_Proceso integer, SV_titulo text,SV_FechaHora text,SV_Foto blob )",
                        [],
                        function(tx,results){
                            // console.log("Se creo SV_Fotos correctamente!")
                        },
                        function(tx,results){
                            console.error("Error al crear la tabla SV_Fotos")
                        }                
                    ); 
                    //Aditoria 
                    tx.executeSql(
                        "create table if not exists Aud_Tec(ID_AT integer primary key,AT_ID_cedula integer,AT_Pregunta integer, AT_Resp1 integer,AT_Resp2 integer,AT_Resp3 integer,AT_Resp4 integer,AT_Resp5 integer,AT_Resp6 integer,AT_Resp7 integer,AT_Resp8 integer, AT_Resp9 integer,AT_Resp10 integer, AT_Resp11 integer,AT_Resp12 integer,AT_Resp13 integer,AT_Resp14 integer,AT_Resp15 integer,AT_Resp16 integer,AT_Resp17 integer,  AT_Total integer)",
                        [],
                        function(tx, results){
                            // console.log("Se creo sanitización Aud_Tec correctamentee!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla  Aud_Tec: " + error.message);
                        }
                    );
                    tx.executeSql(
                        "create table if not exists Aud_General(ID_AG integer primary key,AG_ID_cedula integer,AG_Auditoria integer, AG_CaliGen integer,AG_Cali text,AG_PorcentajeM integer,AG_Obse text, AG_correo text,AG_ID_Tecnico integer,AG_Tecnico text, AG_Puesto text )",
                        [],
                        function(tx, results){
                            // console.log("Se creo sanitización Aud_General correctamentee!");
                        },
                        function(tx, error){
                            console.error("Error al crear la tabla  Aud_Tec: " + error.message);
                        }
                    );
                }
                if(empresa == "PlatoLimpio"){
                //TABLAS PLATO LIMPIO
                //DG_PlatoL
                tx.executeSql(
                    "create table if not exists DG_PlatoL(DG_ID integer primary key,DG_ID_Cedula integer, DG_Empresa text,DG_CEmpleados integer,DG_FechaA text,DG_HoraA text, DG_Contacto text, DG_Puesto text, DG_Correo text,DG_Movil text,DG_CA_Bitacora integer,DG_PRL_Observaciones text, DG_FHC_Observaciones text, DG_FHC_Manuales integer)",
                    [],
                    function(tx,results){
                        console.log("Se creo DG_PlatoL correctamente!")
                    },
                    function(tx,results){
                        console.error("Error al crear la tabla DG_PlatoL")
                    }

                );
                //Ciclo_Charola
                tx.executeSql( 
                    "Create table if not exists Ciclo_Charola(CC_ID integer primary key,CC_Responsable text ,CC_ID_Cedula integer, CC_tipo text,CC_Etapa integer,CC_Escala integer,CC_Oportunidad text,CC_Comentario text)",
                    [],
                    function(tx,results){
                        console.log("Se creo Ciclo_Charola correctamente!")
                    },
                    function(tx,results){
                        console.error("Error al crear la tabla Ciclo_Charola")
                    }

                );

                tx.executeSql(
                    "Create table if not exists PL_Fotos(F_ID_Fotos integer primary key,F_ID_Cedula, F_Recorrido integer,F_Proceso integer, F_titulo,F_FechaHora,F_Foto blob )",
                    [],
                    function(tx,results){
                        console.log("Se creo CC_Etapa correctamente!")
                    },
                    function(tx,results){
                        console.error("Error al crear la tabla CC_Etapa")
                    }
                );  
           }
 
            },
            function(error){
                console.error("Error al crear la base de datos: " + error.message);
            },
            function(){
                // console.log("Base de datos creada exitosamente");
            }
        );
    }
}
