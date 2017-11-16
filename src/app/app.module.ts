import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Angular fire imports
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { AnswerComponent } from './components/answer/answer.component';
import { HomeComponent } from './components/home/home.component';
// Services
import { MusicService } from './services/music.service';
import { EasyComponent } from './components/easy/easy.component';
import { MediumComponent } from './components/medium/medium.component';
import { ChallengeSelectComponent } from './components/challenge-select/challenge-select.component';
import { GenerateScaleComponent } from './components/generate-scale/generate-scale.component';
import { ProficiencyTableComponent } from './components/proficiency-table/proficiency-table.component';

const appRoutes: Routes = [
 {path: '' , component: HomeComponent},
];

export const config = {
  apiKey: 'AIzaSyDA1H7bd56MKHLpsuXk1cN3UpSu9NkbiwE',
  authDomain: 'relativepitch-398e7.firebaseapp.com',
  databaseURL: 'https://relativepitch-398e7.firebaseio.com',
  storageBucket: 'relativepitch-398e7.appspot.com',
  messagingSenderId: '136688648145'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KeyboardComponent,
    AnswerComponent,
    HomeComponent,
    EasyComponent,
    MediumComponent,
    ChallengeSelectComponent,
    GenerateScaleComponent,
    ProficiencyTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config),
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
