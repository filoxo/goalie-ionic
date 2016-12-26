import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import { TabsPage } from '../';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private af: AngularFire) {

  }
	ngOnInit() {
		this.af.auth.subscribe((auth) => {
			if (!auth.uid) {
				// this.af.auth.login();
				console.log('you need to log in')
			} else {
				this.navCtrl.push(TabsPage)
			}
		});
	}
}
