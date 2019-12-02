import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//TODO: Verify with https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/src/app/app.module.ts
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //Data simulation for dev & testing

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
//Added components 
import { UsecasesComponent } from './about/usecases/usecases.component';
import { UsecaseComponent } from './about/usecases/usecase/usecase.component';
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';

//Services
import { HardwareApiService } from './service/hardware-api.service';

@NgModule({
  declarations: [
    AppComponent,
    UsecasesComponent,
    UsecaseComponent, 
    HardwareCreateComponent,
    HardwareListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HardwareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
