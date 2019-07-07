import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mappa', loadChildren: './mappa/mappa.module#MappaPageModule' },
  { path: 'dettaglievento', loadChildren: './dettaglievento/dettaglievento.module#DettaglieventoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'dettagliorganizzatore', loadChildren: './dettagliorganizzatore/dettagliorganizzatore.module#DettagliorganizzatorePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
