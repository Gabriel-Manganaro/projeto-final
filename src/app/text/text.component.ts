
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})



export class TextComponent implements OnInit {

  produto:Array<any>=[]

  constructor(private router:Router,private service:ServiceService) {
    this.produto=this.service.getProduts()
  }


  comprar(item:any){
    this.service.produtosComprados.push(item);
    alert('item adicionado com sucesso!');
  }

  login(){
    alert("Login Efetuado")
  };

  CarrinhodeCompras(){
    alert("Carrinho de Compras")
  };

  navigateByUrl(url:string){
    this.router.navigateByUrl(url)
  };

  ngOnInit(): void {
  };


}
