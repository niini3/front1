import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListserviceComponent } from './components/listservice/listservice.component';
import { Listweb2Component } from './components/listweb2/listweb2.component';
import { ListcreditComponent } from './components/listcredit/listcredit.component';
import { ListappserviceComponent } from './components/listappservice/listappservice.component';

const routes: Routes = [ 
  {
  path: 'list',
  component: ListserviceComponent
},
{
  path: 'listweb2',
  component: Listweb2Component
}
,
{
  path: 'listcredit',
  component: ListcreditComponent
},
{
  path: 'listappservice',
  component: ListappserviceComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }