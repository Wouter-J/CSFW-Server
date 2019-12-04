import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //Import for routing functionality

//Components etc
import { UsecasesComponent } from './about/usecases/usecases.component'
import { LoginComponent } from './login/login.component'
//Hardware components
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';

//Helpers
import { Guard } from './_helpers/guard';

//Components we can navigate to
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'about', component: UsecasesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-hardware', component: HardwareCreateComponent, canActivate: [Guard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
