import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../../Services/contatos-service';
import { Contatos } from '../../Models/contatosModel';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-consultar-contatos',
  templateUrl: './consultar-contatosComponent.html',
  styleUrls: ['./consultar-contatosComponent.css'],
})
export class ConsultarContatosComponent implements OnInit {
  contatos: Contatos[] = [];

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos() {
    const observer: Observer<Contatos[]> = {
      next: (data: Contatos[]) => {
        this.contatos = data;
      },
      error: (error: any) => {
        console.error('Error loading contacts:', error);
      },
      complete: function (): void {
        throw new Error('Function not implemented.');
      }
    };

    this.contatosService.getAllContatos().subscribe(observer);
  }
}
