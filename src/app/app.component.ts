import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';

import { TabsPage, LoginPage } from '../pages';

@Component({
  template: `<ion-nav #root [root]="rootPage"></ion-nav>	`
})
export class MyApp implements OnInit {
	@ViewChild('root') nav: NavController;
  rootPage = LoginPage;

  constructor(platform: Platform, private af: AngularFire) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
	ngOnInit() {


		// this.nav.push(LoginPage);
	}
}
