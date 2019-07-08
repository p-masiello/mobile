import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  { path: 'mappa', loadChildren: './pages/mappa/mappa.module#MappaPageModule' },
  { path: 'chatlist', loadChildren: './pages/chatlist/chatlist.module#ChatlistPageModule' },
  { path: 'dettaglievento', loadChildren: './pages/dettaglievento/dettaglievento.module#DettaglieventoPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'dettagliorganizzatore', loadChildren: './pages/dettagliorganizzatore/dettagliorganizzatore.module#DettagliorganizzatorePageModule' },
  { path: 'donazione', loadChildren: './pages/donazione/donazione.module#DonazionePageModule' },
  { path: 'acquisto', loadChildren: './pages/acquisto/acquisto.module#AcquistoPageModule' },
  { path: 'pagamento', loadChildren: './pages/pagamento/pagamento.module#PagamentoPageModule' },
  { path: 'profiloutente', loadChildren: './pages/profiloutente/profiloutente.module#ProfiloutentePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'editaevento', loadChildren: './pages/editaevento/editaevento.module#EditaeventoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
