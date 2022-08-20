import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './compartilhamento/shared.module';
import { PainelComponent } from './pages/painel/painel.component';
import { ServiceService } from './service/service.service';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PainelComponent,
    CarrinhoComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
