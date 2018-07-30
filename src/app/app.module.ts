//Modules
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { PostPage } from '../pages/post/post';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CreatePostPage } from '../pages/create-post/create-post';

//Services
import { WordpressService } from '../services/wordpress.service';
import { AuthenticationService } from '../services/authentication.service';

// plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    CreatePostPage,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    CreatePostPage,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    WordpressService,
    AuthenticationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
