export interface dados{
  nome: string;
  imagem:string;
  preco: number;
  id:number;
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() { }

produtosComprados: Array<dados>=[]

  produtos: Array<dados>=[
    {
      nome: "Lego City Controle de Incêndios",
      imagem: "https://www.lego.com/cdn/cs/set/assets/blt2934af9b5f14b5c1/60282_alt1.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1",
      preco: 199.99,
      id:1
    },
    {
      nome : "Lego City Perseguição de Helicóptero da Polícia",
      imagem: "https://media.juguetesland.com/product/lego-city-policia-persecucion-en-helicoptero-800x800.jpg",
      preco: 299.99,
      id:2
    },
    {
      nome : "Lego Star Wars Nave de Transporte I-TS da Resistência",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPB2iKD2KaFjLjhI9KOBTq5ncbmNVxtstBQ&usqp=CAU",
      preco: 289.99,
      id:3
    },
    {
      nome : "Lego Star Wars  Lelut24",
      imagem: "https://lelut24.fi/wp-content/uploads/2017/03/Lego_75104-300x273.jpg",
      preco: 269.99,
      id:4
    },
    {
      nome : "Lego Jurassic World T - Rex Fossil Exibição",
      imagem: "https://images-americanas.b2w.io/produtos/4399891385/imagens/lego-jurassic-world-t-rex-fossil-exibicao-198-pcs-76940/4399891385_1_large.jpg",
      preco: 319.99,
      id:5
    },
    {
      nome : "Lego Jurassic World Indominus Rex vs Ankylosaurus",
      imagem: "https://www.pricerunner.com/product/1200x630/3001423132/Lego-Jurassic-World-Indominus-Rex-vs-Ankylosaurus-75941.jpg",
      preco: 519.99,
      id:6
    },
];
  
  getProduts(){
    return this.produtos;
  }

  getProdutosComprados(){
     return this.produtosComprados;
  }

}
