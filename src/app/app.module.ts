import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { AnswerComponent } from './components/answer/answer.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
 {path: '' , component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KeyboardComponent,
    AnswerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
