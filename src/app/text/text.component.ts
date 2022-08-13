export interface dados{
  nomes: string;
  preco: number;
}

export interface dado {
  nomes:string
  valor:number
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})



export class TextComponent implements OnInit {

  dados={

    nomes :"Lego City Controle de Incêndios",
    precos: 199.99
  
  }

  dado={
  
    nome :"Lego City Perseguição de Helicóptero da Polícia",
    preco: 299.99
    
  };
  

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
    this.router.navigateByUrl(url)
  }


  ngOnInit(): void {
  };


}
