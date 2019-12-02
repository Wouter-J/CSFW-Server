import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //Import for routing functionality

//Components etc
import { UsecasesComponent } from './about/usecases/usecases.component'
//Hardware components
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';

//Components we can navigate to
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'about', component: UsecasesComponent },
  { path: 'create-hardware', component: HardwareCreateComponent },
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
