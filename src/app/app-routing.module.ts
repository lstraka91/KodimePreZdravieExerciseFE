import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {PatientsComponent} from "./components/patients/patients.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'Patients',
    component: PatientsComponent,

  },
  {
    path: 'about',
    component: AboutComponent,

  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
