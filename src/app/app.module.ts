import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FIREBASE_PROVIDERS, defaultFirebase, FirebaseAppConfig } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import {
	AboutPage,
	ContactPage,
	HomePage,
	TabsPage,
	GoalsPage,
	SearchPage,
	LoginPage
} from '../pages';

const fbConfig: FirebaseAppConfig = {
	apiKey       : "AIzaSyCf1d9nIMK5Tm97lfN2AEfvmvdM_xmZi4I",
	authDomain   : "goalie-app.firebaseapp.com",
	databaseURL  : "https://goalie-app.firebaseio.com",
	storageBucket: ""
};

const components = [
	MyApp,
  AboutPage,
	ContactPage,
	HomePage,
	TabsPage,
	GoalsPage,
	SearchPage,
	LoginPage
]

@NgModule({
  declarations: components,
  imports: [
    AngularFireModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
	  FIREBASE_PROVIDERS,
	  defaultFirebase(fbConfig),
	  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
