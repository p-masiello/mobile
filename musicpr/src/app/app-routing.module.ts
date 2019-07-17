import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'lista',
    loadChildren: './pages/lista/lista.module#ListaPageModule'
  },
  { path: 'mappa',
    loadChildren: './pages/mappa/mappa.module#MappaPageModule'
  },
  { path: 'chatlist',
    loadChildren: './pages/chatlist/chatlist.module#ChatlistPageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'dettaglievento/:id',
    loadChildren: './pages/dettaglievento/dettaglievento.module#DettaglieventoPageModule'
  },
  // tslint:disable-next-line:max-line-length
  { path: 'dettagliorganizzatore/:evento.creatore.id',
    loadChildren: './pages/dettagliorganizzatore/dettagliorganizzatore.module#DettagliorganizzatorePageModule'
  },
  { path: 'donazione/:id',
    loadChildren: './pages/donazione/donazione.module#DonazionePageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'acquisto/:id',
    loadChildren: './pages/acquisto/acquisto.module#AcquistoPageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'pagamento/id',
    loadChildren: './pages/pagamento/pagamento.module#PagamentoPageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'profiloutente',
    loadChildren: './pages/profiloutente/profiloutente.module#ProfiloutentePageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  { path: 'signup',
    loadChildren: './pages/signup/signup.module#SignupPageModule'
  },
  { path: 'editaevento',
    loadChildren: './pages/editaevento/editaevento.module#EditaeventoPageModule',
    canActivateChild: [AuthGuard]

  },
  { path: 'tab',
    loadChildren: './pages/tab/tab.module#TabPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
