import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperComponent } from './developers/developer/developer.component';
import { DeveloperListComponent } from './developers/developer-list/developer-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {DeveloperService} from './shared/developer.service';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperComponent,
    DeveloperListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [DeveloperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
