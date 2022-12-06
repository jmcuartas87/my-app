export const HomeRoutes = [
  {
    path: 'home',
    loadChildren: () => import('./containers/home.module').then(m => m.HomePageModule)
  }
];
