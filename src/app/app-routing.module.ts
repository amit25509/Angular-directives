import { ClassBindingComponent } from './attribute-directives/class-binding/class-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleBindingComponent } from './attribute-directives/style-binding/style-binding.component';


const routes: Routes = [
  {path: 'class-binding', component: ClassBindingComponent},
  { path: 'style-binding', component: StyleBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
