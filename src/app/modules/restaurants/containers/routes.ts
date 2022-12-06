export const RestaurantsRoutes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
  }
];
