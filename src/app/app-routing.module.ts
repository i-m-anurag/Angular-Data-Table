import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent} from './components/home/home.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';



const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'',component:HomeComponent},
  { path: 'check', component: CheckboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
