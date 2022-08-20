export interface dados{
  nome: string;
  imagem:string;
  preco: number;
  id:number;
}
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'final';
}


