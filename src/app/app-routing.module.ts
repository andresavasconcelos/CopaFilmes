import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampeonatoComponent } from './campeonato/campeonato.component';
import { CampeaoComponent } from './campeao/campeao.component';

const routes: Routes = [
  { path: '', component:CampeonatoComponent},
  { path: 'campeonato', component:CampeonatoComponent},
  { path: 'campeao', component:CampeaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
