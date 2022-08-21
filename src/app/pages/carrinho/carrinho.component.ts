import { Component, OnInit } from '@angular/core';
import { dados } from 'src/app/app.component';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  total: number = 0;
  itens: Array<any> = [];
  constructor(private service: ServiceService) {
   this.refresh();
  }

  ngOnInit(): void {}

  refresh(){
    this.itens = this.service.getProdutosComprados();
    this.itens.forEach((e) => (this.total += e.preco));
  }

  remover(item: dados) {
    this.total = 0;
    this.service.removeProduto(item);
    this.refresh();
    alert('Item removido com sucesso!');
  }

  finish() {
    this.service.reset();
    this.refresh();
    alert('Compra realizada! Obrigada pela preferencia!');
  }
}
