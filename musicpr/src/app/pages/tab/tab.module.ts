import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [

      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: './pages/lista/lista.module#ListaPageModule',
          }
        ]
      },
      {
           path: 'mappa',
            children: [
                {
                         path: '',
                         loadChildren: './pages/mappa/mappa.module#MappaPageModule'
                }
                    ]
       },
      {
             path: 'chatlist',
              children: [
                       {
                         path: '',
                         loadChildren: './pages/chatlist/chatlist.module#ChatlistPageModule'
                       }
                         ]
      },
      {
        path: 'profiloutente',
        children: [
          {
            path: '',
            loadChildren: './pages/profiloutente/profiloutente.module#ProfiloutentePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo:'/tab/lista',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
