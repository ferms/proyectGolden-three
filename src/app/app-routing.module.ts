import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './components/number/number.component';

const routes: Routes = [
  {
    path: 'number',
    component: NumberComponent
  },
  { path: '**', redirectTo: 'number', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
