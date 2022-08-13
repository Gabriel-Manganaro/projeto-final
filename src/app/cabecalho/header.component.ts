import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { 

  }

  comprar(){
    alert("Compra Efetuada")
  };

  login(){
    alert("Login Efetuado")
  };

  CarrinhodeCompras(){
    alert("Carrinho de Compras")
  };


  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
  }

}
