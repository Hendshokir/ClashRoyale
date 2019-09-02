import { RandomModeComponent } from './components/deck-cards/random-mode/random-mode.component';
import { SelectModeComponent } from './components/deck-cards/select-mode/select-mode.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardItemComponent } from './components/deck-cards/card-item/card-item.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'random-mode'},
  {
    path: '', children: [
      {path: 'select-mode', component: SelectModeComponent},
      {path: 'random-mode', component: RandomModeComponent},
      {path: 'card-item/:idName', component: CardItemComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
