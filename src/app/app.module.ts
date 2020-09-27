import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './info/intro/intro.component';
import { Chapter1Component } from './info/chapter1/chapter1.component';
import { Chapter1p1Component } from './info/chapter1p1/chapter1p1.component';
import { Chapter1p2Component } from './info/chapter1p2/chapter1p2.component';
import { Chapter1p3Component } from './info/chapter1p3/chapter1p3.component';
import { Chapter1p4Component } from './info/chapter1p4/chapter1p4.component';
import { Chapter2Component } from './info/chapter2/chapter2.component';
import { Chapter2p1Component } from './info/chapter2p1/chapter2p1.component';
import { Chapter2p1p1Component } from './info/chapter2p1p1/chapter2p1p1.component';
import { Chapter2p1p2Component } from './info/chapter2p1p2/chapter2p1p2.component';
import { Chapter2p1p3Component } from './info/chapter2p1p3/chapter2p1p3.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {path: '', component: IntroComponent },
  {path: 'chapter1', component: Chapter1Component },
  {path: 'chapter1p1', component: Chapter1p1Component},
  {path: 'chapter1p2', component: Chapter1p2Component},
  {path: 'chapter1p3', component: Chapter1p3Component},
  {path: 'chapter1p4', component: Chapter1p4Component},
  {path: 'chapter2', component: Chapter2Component},
  {path: 'chapter2p1', component: Chapter2p1Component},
  {path: 'chapter2p1p1', component: Chapter2p1p1Component},
  {path: 'chapter2p1p2', component: Chapter2p1p2Component},
  {path: 'chapter2p1p3', component: Chapter2p1p3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Chapter1Component,
    Chapter1p1Component,
    Chapter1p2Component,
    Chapter1p3Component,
    Chapter1p4Component,
    Chapter2Component,
    Chapter2p1Component,
    Chapter2p1p1Component,
    Chapter2p1p2Component,
    Chapter2p1p3Component,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
