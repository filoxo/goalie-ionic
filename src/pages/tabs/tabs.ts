import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GoalsPage } from '../goals/goals';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = GoalsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = SearchPage;

  constructor() {

  }
}
