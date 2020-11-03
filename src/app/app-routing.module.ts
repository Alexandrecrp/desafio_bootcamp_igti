import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenadorListComponent } from './senador-list/senador-list.component';
import { SenadorSelectedComponent } from './senador-selected/senador-selected.component';

const routes: Routes = [
  { path: 'senadores', component: SenadorListComponent },
  { path: 'despesasSenadores/:id', component: SenadorSelectedComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
