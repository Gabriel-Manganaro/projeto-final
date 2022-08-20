import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';


const routes: Routes = [
  {path:'home',title:'home',component:HomeComponent},
  {path:'login',title:'login',component:LoginComponent},
  {path:'painel',title:'painel',component:PainelComponent},
  {path:'carrinho',title:'carrinho',component:CarrinhoComponent},
  {path:'',redirectTo:'/painel',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
