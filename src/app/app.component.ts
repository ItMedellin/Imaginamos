import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//Servicio
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //Por defecto no va a cargar ninguna página
  rootPage:any;

  //Inyectando componentes
  //Inyectando servicios
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    authenticationService: AuthenticationService
  ) {
    //Cargados todos los modulos de Ionic
    //Los Plugins o Complementos ya están disponibles
    // Platform - Dispositivo nativo o Desktop
    platform.ready().then( ()=> {
      authenticationService.getUser()
      .then(
        data => {
          authenticationService.validateAuthToken(data.token)
          .subscribe(
            res => this.rootPage = HomePage,
            err =>   this.rootPage = LoginPage
          )
        },
        err => this.rootPage = LoginPage
      );

      statusBar.styleDefault();
      // Pantalla de carga de la Aplicación
      splashScreen.hide();
    });
  }
}
