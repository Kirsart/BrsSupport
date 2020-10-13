import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './info/intro/intro.component';
import { Chapter1Component } from './info/part1/chapter1/chapter1.component';
import { Chapter1p1Component } from './info/part1/chapter1p1/chapter1p1.component';
import { Chapter1p2Component } from './info/part1/chapter1p2/chapter1p2.component';
import { Chapter1p3Component } from './info/part1/chapter1p3/chapter1p3.component';
import { Chapter1p4Component } from './info/part1/chapter1p4/chapter1p4.component';
import { Chapter2Component } from './info/part2/chapter2/chapter2.component';
import { Chapter2p1Component } from './info/part2/chapter2p1/chapter2p1.component';
import { Chapter2p1p1Component } from './info/part2/chapter2p1p1/chapter2p1p1.component';
import { Chapter2p1p2Component } from './info/part2/chapter2p1p2/chapter2p1p2.component';
import { Chapter2p1p3Component } from './info/part2/chapter2p1p3/chapter2p1p3.component';
import { MenuComponent } from './menu/menu.component';
import { Chater2p2Component } from './info/part2/chater2p2/chater2p2.component';
import { Chater2p2p1Component } from './info/part2/chater2p2p1/chater2p2p1.component';
import { Chater2p2p2Component } from './info/part2/chater2p2p2/chater2p2p2.component';
import { Chater2p2p3Component } from './info/part2/chater2p2p3/chater2p2p3.component';
import { Chater2p2p4Component } from './info/part2/chater2p2p4/chater2p2p4.component';
import { Chater2p2p5Component } from './info/part2/chater2p2p5/chater2p2p5.component';
import { Chater2p2p6Component } from './info/part2/chater2p2p6/chater2p2p6.component';
import { Chater2p2p7Component } from './info/part2/chater2p2p7/chater2p2p7.component';
import { Chater2p2p8Component } from './info/part2/chater2p2p8/chater2p2p8.component';
import { Chater2p2p9Component } from './info/part2/chater2p2p9/chater2p2p9.component';
import { Chater2p2p10Component } from './info/part2/chater2p2p10/chater2p2p10.component';
import { Chater2p2p11Component } from './info/part2/chater2p2p11/chater2p2p11.component';
import { Chater2p2p12Component } from './info/part2/chater2p2p12/chater2p2p12.component';
import { Chater2p3pComponent } from './info/part2/chater2p3p/chater2p3p.component';
import { Chater2p3pp1Component } from './info/part2/chater2p3pp1/chater2p3pp1.component';
import { Chater2p3p2Component } from './info/part2/chater2p3p2/chater2p3p2.component';
import { Chater2p3p3Component } from './info/part2/chater2p3p3/chater2p3p3.component';
import { Chater2p3p4Component } from './info/part2/chater2p3p4/chater2p3p4.component';
import { Chater2p3p5Component } from './info/part2/chater2p3p5/chater2p3p5.component';
import { Chater2p3p6Component } from './info/part2/chater2p3p6/chater2p3p6.component';
import { Chater3Component } from './info/part3/chater3/chater3.component';
import { Chater3p1Component } from './info/part3/chater3p1/chater3p1.component';
import { Chater3p1p1Component } from './info/part3/chater3p1p1/chater3p1p1.component';
import { Chater3p1p2Component } from './info/part3/chater3p1p2/chater3p1p2.component';
import { Chater3p1p3Component } from './info/part3/chater3p1p3/chater3p1p3.component';
import { Chater3p1p4Component } from './info/part3/chater3p1p4/chater3p1p4.component';
import { Chater3p1p5Component } from './info/part3/chater3p1p5/chater3p1p5.component';
import { Chater3p1p6Component } from './info/part3/chater3p1p6/chater3p1p6.component';
import { Chater3p1p7Component } from './info/part3/chater3p1p7/chater3p1p7.component';
import { Chater3p1p8Component } from './info/part3/chater3p1p8/chater3p1p8.component';
import { Chater3p1p9Component } from './info/part3/chater3p1p9/chater3p1p9.component';
import { Chater3p1p10Component } from './info/part3/chater3p1p10/chater3p1p10.component';
import { Chater3p1p11Component } from './info/part3/chater3p1p11/chater3p1p11.component';
import { Chater3p1p12Component } from './info/part3/chater3p1p12/chater3p1p12.component';
import { Chater3p1p13Component } from './info/part3/chater3p1p13/chater3p1p13.component';
import { Chater3p1p14Component } from './info/part3/chater3p1p14/chater3p1p14.component';
import { Chater3p1p15Component } from './info/part3/chater3p1p15/chater3p1p15.component';
import { Chater3p1p16Component } from './info/part3/chater3p1p16/chater3p1p16.component';
import { Chater3p1p17Component } from './info/part3/chater3p1p17/chater3p1p17.component';
import { Chater3p1p19Component } from './info/part3/chater3p1p19/chater3p1p19.component';
import { Chater3p2Component } from './info/part3/chater3p2/chater3p2.component';
import { Chater4Component } from './info/part4/chater4/chater4.component';
import { Chater4p1Component } from './info/part4/chater4p1/chater4p1.component';
import { Chater4p2Component } from './info/part4/chater4p2/chater4p2.component';
import { Chater4p3Component } from './info/part4/chater4p3/chater4p3.component';
import { Chater5Component } from './info/part5/chater5/chater5.component';
import { Chater5p1Component } from './info/part5/chater5p1/chater5p1.component';
import { Chater5p2Component } from './info/part5/chater5p2/chater5p2.component';
import { Chater5p3Component } from './info/part5/chater5p3/chater5p3.component';
import { Chater5p4Component } from './info/part5/chater5p4/chater5p4.component';
import { Chater5p5Component } from './info/part5/chater5p5/chater5p5.component';
import { Chater5p5p1Component } from './info/part5/chater5p5p1/chater5p5p1.component';
import { Chater5p5p2Component } from './info/part5/chater5p5p2/chater5p5p2.component';
import { Chater5p5p3Component } from './info/part5/chater5p5p3/chater5p5p3.component';
import { Chater5p6Component } from './info/part5/chater5p6/chater5p6.component';
import { Chater5p7Component } from './info/part5/chater5p7/chater5p7.component';
import { Chater6Component } from './info/part6/chater6/chater6.component';
import { Chater6p1Component } from './info/part6/chater6p1/chater6p1.component';
import { Chater6p2Component } from './info/part6/chater6p2/chater6p2.component';
import { Chater6p3Component } from './info/part6/chater6p3/chater6p3.component';
import { Chater6p4Component } from './info/part6/chater6p4/chater6p4.component';
import { Chater6p5Component } from './info/part6/chater6p5/chater6p5.component';
import { Chater7Component } from './info/part7/chater7/chater7.component';
import { Chater7p1Component } from './info/part7/chater7p1/chater7p1.component';
import { Chater7p1p1Component } from './info/part7/chater7p1p1/chater7p1p1.component';
import { Chater7p1p2Component } from './info/part7/chater7p1p2/chater7p1p2.component';
import { Chater7p2Component } from './info/part7/chater7p2/chater7p2.component';
import { Chater7p2p1Component } from './info/part7/chater7p2p1/chater7p2p1.component';
import { Chater7p2p2Component } from './info/part7/chater7p2p2/chater7p2p2.component';
import { Chater7p3Component } from './info/part7/chater7p3/chater7p3.component';
import { Chater7p3p1Component } from './info/part7/chater7p3p1/chater7p3p1.component';
import { Chater7p3p2Component } from './info/part7/chater7p3p2/chater7p3p2.component';
import { Chater7p3p3Component } from './info/part7/chater7p3p3/chater7p3p3.component';
import { Chater7p3p5Component } from './info/part7/chater7p3p5/chater7p3p5.component';
import { Chater7p3p6Component } from './info/part7/chater7p3p6/chater7p3p6.component';
import { Chater7p3p7Component } from './info/part7/chater7p3p7/chater7p3p7.component';
import { Chater7p3p8Component } from './info/part7/chater7p3p8/chater7p3p8.component';
import { Chater7p3p9Component } from './info/part7/chater7p3p9/chater7p3p9.component';
import { Chater7p3p10Component } from './info/part7/chater7p3p10/chater7p3p10.component';
import { Chater7p3p11Component } from './info/part7/chater7p3p11/chater7p3p11.component';
import { Chater7p3p13Component } from './info/part7/chater7p3p13/chater7p3p13.component';
import { Chater7p3p14Component } from './info/part7/chater7p3p14/chater7p3p14.component';
import { Chater7p3p15Component } from './info/part7/chater7p3p15/chater7p3p15.component';
import { Chater7p3p16Component } from './info/part7/chater7p3p16/chater7p3p16.component';
import { Chater7p4Component } from './info/part7/chater7p4/chater7p4.component';
import { Chater7p4p1Component } from './info/part7/chater7p4p1/chater7p4p1.component';
import { Chater7p4p2Component } from './info/part7/chater7p4p2/chater7p4p2.component';
import { Chater7p5Component } from './info/part7/chater7p5/chater7p5.component';
import { Chater7p5p1Component } from './info/part7/chater7p5p1/chater7p5p1.component';
import { Chater7p5p2Component } from './info/part7/chater7p5p2/chater7p5p2.component';
import { Chater7p5p3Component } from './info/part7/chater7p5p3/chater7p5p3.component';
import { Chater7p5p4Component } from './info/part7/chater7p5p4/chater7p5p4.component';
import { Chater7p5p5Component } from './info/part7/chater7p5p5/chater7p5p5.component';
import { Chater7p5p6Component } from './info/part7/chater7p5p6/chater7p5p6.component';
import { Chater7p5p7Component } from './info/part7/chater7p5p7/chater7p5p7.component';
import { Chater7p5p8Component } from './info/part7/chater7p5p8/chater7p5p8.component';
import { Chater7p6Component } from './info/part7/chater7p6/chater7p6.component';
import { Chater7p6p1Component } from './info/part7/chater7p6p1/chater7p6p1.component';
import { Chater7p6p2Component } from './info/part7/chater7p6p2/chater7p6p2.component';
import { Chater7p7Component } from './info/part7/chater7p7/chater7p7.component';
import { Chater7p8Component } from './info/part7/chater7p8/chater7p8.component';
import { Chater8Component } from './info/part8/chater8/chater8.component';
import { Chater8p1Component } from './info/part8/chater8p1/chater8p1.component';
import { Chater8p2Component } from './info/part8/chater8p2/chater8p2.component';
import { Chater8p3Component } from './info/part8/chater8p3/chater8p3.component';
import { Chater8p4Component } from './info/part8/chater8p4/chater8p4.component';
import { Chater8p4p1Component } from './info/part8/chater8p4p1/chater8p4p1.component';
import { Chater8p4p2Component } from './info/part8/chater8p4p2/chater8p4p2.component';
import { Chater8p5Component } from './info/part8/chater8p5/chater8p5.component';
import { Chater8p5p1Component } from './info/part8/chater8p5p1/chater8p5p1.component';
import { Chater8p5p2Component } from './info/part8/chater8p5p2/chater8p5p2.component';
import { Chater8p5p3Component } from './info/part8/chater8p5p3/chater8p5p3.component';
import { Chater8p6Component } from './info/part8/chater8p6/chater8p6.component';
import { Chater8p7Component } from './info/part8/chater8p7/chater8p7.component';
import { Chater8p7p1Component } from './info/part8/chater8p7p1/chater8p7p1.component';
import { Chater8p7p2Component } from './info/part8/chater8p7p2/chater8p7p2.component';
import { Chater8p7p1p1Component } from './info/part8/chater8p7p1p1/chater8p7p1p1.component';
import { Chater8p7p2p1Component } from './info/part8/chater8p7p2p1/chater8p7p2p1.component';
import { Chater8p8Component } from './info/part8/chater8p8/chater8p8.component';
import { Chater8p9Component } from './info/part8/chater8p9/chater8p9.component';
import { Chater8p9p1Component } from './info/part8/chater8p9p1/chater8p9p1.component';
import { Chater8p9p2Component } from './info/part8/chater8p9p2/chater8p9p2.component';
import { Chater8p9p3Component } from './info/part8/chater8p9p3/chater8p9p3.component';
import { Chater8p9p4Component } from './info/part8/chater8p9p4/chater8p9p4.component';
import { Chater8p9p5Component } from './info/part8/chater8p9p5/chater8p9p5.component';
import { Chater8p9p6Component } from './info/part8/chater8p9p6/chater8p9p6.component';
import { Chater8p10Component } from './info/part8/chater8p10/chater8p10.component';
import { Chater8p11Component } from './info/part8/chater8p11/chater8p11.component';
import { Chater9Component } from './info/part9/chater9/chater9.component';
import { Chater9p1Component } from './info/part9/chater9p1/chater9p1.component';
import { Chater9p2Component } from './info/part9/chater9p2/chater9p2.component';
import { Chater10Component } from './info/part10/chater10/chater10.component';
import { Chater10p1Component } from './info/part10/chater10p1/chater10p1.component';
import { Chater10p1p1Component } from './info/part10/chater10p1p1/chater10p1p1.component';
import { Chater10p2Component } from './info/part10/chater10p2/chater10p2.component';
import { Chater11Component } from './info/part11/chater11/chater11.component';

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
    Chater2p2Component,
    Chater2p2p1Component,
    Chater2p2p2Component,
    Chater2p2p3Component,
    Chater2p2p4Component,
    Chater2p2p5Component,
    Chater2p2p6Component,
    Chater2p2p7Component,
    Chater2p2p8Component,
    Chater2p2p9Component,
    Chater2p2p10Component,
    Chater2p2p11Component,
    Chater2p2p12Component,
    Chater2p3pComponent,
    Chater2p3pp1Component,
    Chater2p3p2Component,
    Chater2p3p3Component,
    Chater2p3p4Component,
    Chater2p3p5Component,
    Chater2p3p6Component,
    Chater3Component,
    Chater3p1Component,
    Chater3p1p1Component,
    Chater3p1p2Component,
    Chater3p1p3Component,
    Chater3p1p4Component,
    Chater3p1p5Component,
    Chater3p1p6Component,
    Chater3p1p7Component,
    Chater3p1p8Component,
    Chater3p1p9Component,
    Chater3p1p10Component,
    Chater3p1p11Component,
    Chater3p1p12Component,
    Chater3p1p13Component,
    Chater3p1p14Component,
    Chater3p1p15Component,
    Chater3p1p16Component,
    Chater3p1p17Component,
    Chater3p1p19Component,
    Chater3p2Component,
    Chater4Component,
    Chater4p1Component,
    Chater4p2Component,
    Chater4p3Component,
    Chater5Component,
    Chater5p1Component,
    Chater5p2Component,
    Chater5p3Component,
    Chater5p4Component,
    Chater5p5Component,
    Chater5p5p1Component,
    Chater5p5p2Component,
    Chater5p5p3Component,
    Chater5p6Component,
    Chater5p7Component,
    Chater6Component,
    Chater6p1Component,
    Chater6p2Component,
    Chater6p3Component,
    Chater6p4Component,
    Chater6p5Component,
    Chater7Component,
    Chater7p1Component,
    Chater7p1p1Component,
    Chater7p1p2Component,
    Chater7p2Component,
    Chater7p2p1Component,
    Chater7p2p2Component,
    Chater7p3Component,
    Chater7p3p1Component,
    Chater7p3p2Component,
    Chater7p3p3Component,
    Chater7p3p5Component,
    Chater7p3p6Component,
    Chater7p3p7Component,
    Chater7p3p8Component,
    Chater7p3p9Component,
    Chater7p3p10Component,
    Chater7p3p11Component,
    Chater7p3p13Component,
    Chater7p3p14Component,
    Chater7p3p15Component,
    Chater7p3p16Component,
    Chater7p4Component,
    Chater7p4p1Component,
    Chater7p4p2Component,
    Chater7p5Component,
    Chater7p5p1Component,
    Chater7p5p2Component,
    Chater7p5p3Component,
    Chater7p5p4Component,
    Chater7p5p5Component,
    Chater7p5p6Component,
    Chater7p5p7Component,
    Chater7p5p8Component,
    Chater7p6Component,
    Chater7p6p1Component,
    Chater7p6p2Component,
    Chater7p7Component,
    Chater7p8Component,
    Chater8Component,
    Chater8p1Component,
    Chater8p2Component,
    Chater8p3Component,
    Chater8p4Component,
    Chater8p4p1Component,
    Chater8p4p2Component,
    Chater8p5Component,
    Chater8p5p1Component,
    Chater8p5p2Component,
    Chater8p5p3Component,
    Chater8p6Component,
    Chater8p7Component,
    Chater8p7p1Component,
    Chater8p7p2Component,
    Chater8p7p1p1Component,
    Chater8p7p2p1Component,
    Chater8p8Component,
    Chater8p9Component,
    Chater8p9p1Component,
    Chater8p9p2Component,
    Chater8p9p3Component,
    Chater8p9p4Component,
    Chater8p9p5Component,
    Chater8p9p6Component,
    Chater8p10Component,
    Chater8p11Component,
    Chater9Component,
    Chater9p1Component,
    Chater9p2Component,
    Chater10Component,
    Chater10p1Component,
    Chater10p1p1Component,
    Chater10p2Component,
    Chater11Component,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
