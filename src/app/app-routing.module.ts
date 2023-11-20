import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import { PageslideComponent } from './pageslide/pageslide.component';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';

const routes: Routes = [
  { path: '', component: TelaprincipalComponent },
  { path: "form", component: FormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
