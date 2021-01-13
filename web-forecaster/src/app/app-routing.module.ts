import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecComponent } from './dec/dec.component';
import { WtComponent } from './wt/wt.component';

//Configuring the routes array to enable correct navigation in the project.
const routes: Routes = [
{path:'',component:DecComponent},
{path:'weather',component:WtComponent},
{path:'**',component:DecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
