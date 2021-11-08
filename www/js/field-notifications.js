function formatNow() {
    var now = new Date();
    return (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds());
  }
  function pushContent(){
      FCM.onNotification(function(data){
          if(data.wasTapped){
              alert(JSON.stringify(data));
          } else {
              alert(JSON.stringify(data));
          }
          console.log(data);
      })
  }
  function setupOnNotification() {
    //Notificacion cuando app esta abierta
    FCM.eventTarget.addEventListener(
      "notification",
      function (data) {
        console.log("<pre>" + JSON.stringify(data.detail, null, 2) + "</pre>");
      },
      false
    );
    // Notificacion cuando la app esta cerrada y es tap
    FCM.getInitialPushPayload()
      .then((payload) => {
        if(payload == null){

        } else {
          console.log(payload);
          console.log(JSON.stringify(payload.route, null, 2));
          console.log(JSON.stringify(payload, null, 2));
          if(payload.route == "verVi"){
            app.views.main.router.back('/excel/', {force: true, ignoreCache: true, reload: true});
          }
        }
      })
      .catch((error) => {
        console.log(error)
        console.log(JSON.stringify(error, null, 2));
      });
  }
  function trySomeTimes(asyncFunc, onSuccess, onFailure, customTries) {
    var tries = typeof customTries === "undefined" ? 100 : customTries;
    var interval = setTimeout(function () {
      if (typeof asyncFunc !== "function") {
        onSuccess("Unavailable");
        return;
      }
      asyncFunc()
        .then(function (result) {
          if ((result !== null && result !== "") || tries < 0) {
            onSuccess(result);
          } else {
            trySomeTimes(asyncFunc, onSuccess, onFailure, tries - 1);
          }
        })
        .catch(function (e) {
          clearInterval(interval);
          onFailure(e);
        });
    }, 100);
  }
  function logFCMToken() {
    trySomeTimes(
      FCM.getToken,
      function (token) {

        console.log(token)
      },
      function (error) {
        console.log("Error on listening for FCM token: " + error.message);
      }
  )   ;
  }
  function waitForPermission(callback) {
    FCM.requestPushPermission()
      .then(function (didIt) {
        if (didIt) {
          callback();
        } else {
          console.log("Push permission was not given to this application");
        }
      })
      .catch(function (error) {
        console.log("Error on checking permission: " + error);
      });
  }
  function logHasPermissionOnStart() {
    FCM.hasPermission().then(function (hasIt) {
        console.log("Started with permission: " + JSON.stringify(hasIt));
    });
  }
  function setupListeners() {
    logHasPermissionOnStart();
    waitForPermission(function () {
      FCM.createNotificationChannel({
        id: "sound_alert6",
        name: "Sound Alert6",
        importance: "high",
        sound: "elet_mp3",
        lights: true,
        vibration: true,
      });
      FCM.subscribeToTopic('SMC');
      logFCMToken();
      setupOnNotification();
      pushContent();
    });
  }
  
  document.addEventListener("deviceready", setupListeners, false);