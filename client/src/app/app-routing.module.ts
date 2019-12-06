import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //Import for routing functionality

//Components etc
import { UsecasesComponent } from './about/usecases/usecases.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
//Hardware components
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';
import { HardwareEditComponent } from './hardware/hardware-edit/hardware-edit.component';
import { HardwareDeleteComponent } from './hardware/hardware-delete/hardware-delete.component';
//Spec components
import { SpecCreateComponent } from './spec/spec-create/spec-create.component';
import { SpecListComponent } from './spec/spec-list/spec-list.component';
import { SpecEditComponent } from './spec/spec-edit/spec-edit.component';
import { SpecDeleteComponent } from './spec/spec-delete/spec-delete.component';
//Helpers
import { Guard } from './_helpers/guard';

//Components we can navigate to
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: UsecasesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list-hardware', component: HardwareListComponent},
  { path: 'create-hardware', component: HardwareCreateComponent, canActivate: [Guard] },
  { path: 'edit-hardware/:id', component: HardwareEditComponent, canActivate: [Guard] },
  { path: 'delete-hardware', component: HardwareDeleteComponent, canActivate: [Guard] },
  { path: 'list-spec', component: SpecListComponent},
  { path: 'create-spec', component: SpecCreateComponent, canActivate: [Guard] },
  { path: 'edit-spec/:id', component: SpecEditComponent, canActivate: [Guard] },
  { path: 'delete-spec', component: SpecDeleteComponent, canActivate: [Guard] },
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
