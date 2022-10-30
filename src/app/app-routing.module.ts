import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"characters", component: CharactersPageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "locations", component: LocationsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
