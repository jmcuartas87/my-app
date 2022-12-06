import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeRoutes } from './modules/home/routes';
import { RestaurantsRoutes } from './modules/restaurants/containers/routes';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...HomeRoutes,
  ...RestaurantsRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}