import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//TODO: Verify with https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/src/app/app.module.ts

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';

//Services
import { HardwareApiService } from './service/hardware-api.service';

//Helpers
import { Interceptor } from './_helpers/interceptor';

//Added components 
import { UsecasesComponent } from './about/usecases/usecases.component';
import { UsecaseComponent } from './about/usecases/usecase/usecase.component';
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';
import { LoginComponent } from './login/login.component';
import { HardwareEditComponent } from './hardware/hardware-edit/hardware-edit.component';
import { HardwareDeleteComponent } from './hardware/hardware-delete/hardware-delete.component';
import { RegisterComponent } from './register/register.component';
import { SpecListComponent } from './spec/spec-list/spec-list.component';
import { SpecCreateComponent } from './spec/spec-create/spec-create.component';
import { SpecEditComponent } from './spec/spec-edit/spec-edit.component';
import { SpecDeleteComponent } from './spec/spec-delete/spec-delete.component'

@NgModule({
  declarations: [
    AppComponent,
    UsecasesComponent,
    UsecaseComponent, 
    HardwareCreateComponent,
    HardwareListComponent,
    LoginComponent,
    HardwareEditComponent,
    HardwareDeleteComponent,
    RegisterComponent,
    SpecListComponent,
    SpecCreateComponent,
    SpecEditComponent,
    SpecDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    HardwareApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
