import { Component } from '@angular/core';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
import { AppIonicModule } from './shared/ionic-components';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import {  flashOutline, folderOutline,  } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,AppIonicModule,RouterModule,IonIcon],
})
export class AppComponent {

  constructor() {
     addIcons({ flashOutline, folderOutline });
  }
}
