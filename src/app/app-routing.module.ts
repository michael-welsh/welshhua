import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NihaoComponent } from './nihao/nihao.component';
import { HollywoodComponent } from './hollywood/hollywood.component';

const routes: Routes = [
  { path: '', component: NihaoComponent },
  { path: 'hollywood', component: HollywoodComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
