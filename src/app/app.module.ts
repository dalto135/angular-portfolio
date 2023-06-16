import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { Project } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    AboutMeComponent,
    ProjectListComponent,
    ContactMeComponent,
    Project
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AboutMeComponent },
      { path: 'projects', component: ProjectListComponent },
      { path: 'contact-me', component: ContactMeComponent }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
