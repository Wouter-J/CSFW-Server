import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
//TODO: Verify with https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/src/app/app.module.ts
//Bootstrap
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { TooltipModule } from 'ngx-bootstrap/tooltip';
//import { ModalModule } from 'ngx-bootstrap/modal';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //Data simulation for dev & testing

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Added components
import { UsecasesComponent } from './about/usecases/usecases.component';
import { UsecaseComponent } from './about/usecases/usecase/usecase.component';

@NgModule({
  declarations: [
    AppComponent,
    UsecasesComponent,
    UsecaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    //BsDropdownModule.forRoot(),
    //TooltipModule.forRoot(),
    //ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
