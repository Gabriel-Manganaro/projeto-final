import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path:'home',title:'home',component:TextComponent},
  {path:'login',title:'final',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
