import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarContatosComponent } from './Components/adicionar-Contatos/adicionar-contatos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContatosService } from './Services/contatos-service';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarContatosComponent } from './Components/consultar-Contatos/consultar-contatosComponent';
import { EditarContatosComponent } from './Components/editar-Contatos/editar-contatosComponent';
import { FavoritarContatosComponent } from './Components/favoritar-Contatos/favoritar-contatosComponent';
import { ExcluirContatosComponent } from './Components/excluir-Contatos/excluir-contatosComponent';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,AdicionarContatosComponent,ConsultarContatosComponent,EditarContatosComponent,FavoritarContatosComponent,ExcluirContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule, BrowserAnimationsModule,
    MatCardModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
