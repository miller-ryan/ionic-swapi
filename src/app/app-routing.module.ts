import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'planet',
    loadChildren: './planet/planet.module#PlanetPageModule'
  },  { path: 'film', loadChildren: './film/film.module#FilmPageModule' },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'species', loadChildren: './species/species.module#SpeciesPageModule' },
  { path: 'starship', loadChildren: './starship/starship.module#StarshipPageModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
