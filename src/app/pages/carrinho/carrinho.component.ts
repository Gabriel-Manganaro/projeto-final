import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  itens:Array<any>=[]

  constructor(private service:ServiceService) {
    this.itens=this.service.getProdutosComprados()
   }

  ngOnInit(): void {
  }

}
