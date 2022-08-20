import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../cabecalho/header.component';
import { TextComponent } from '../text/text.component';
import { ServiceService } from '../service/service.service';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TextComponent,
    
  ],

  imports: [
    CommonModule,
  ],

  exports : [
    FooterComponent,
    HeaderComponent,
    TextComponent,
    
    
   
  ]
})
export class SharedModule { }
