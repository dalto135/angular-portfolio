import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectListComponent,
    ContactMeComponent,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'about-me', component: AboutMeComponent },
      { path: 'projects', component: ProjectListComponent },
      { path: 'contact-me', component: ContactMeComponent }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
