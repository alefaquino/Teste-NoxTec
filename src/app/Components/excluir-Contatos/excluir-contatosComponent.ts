import { Component, Input } from '@angular/core';
import { Contatos } from '../../Models/contatosModel';
import { ContatosService } from '../../Services/contatos-service';

@Component({
  selector: 'app-excluir-contatos',
  template: `
    <button (click)="excluirContato()">
      Excluir
    </button>
  `,
})
export class ExcluirContatosComponent {
  @Input() contato?: Contatos;

  constructor(private contatosService: ContatosService) {}

  excluirContato(): void {
    const id = this.contato?.id || 0;
    this.contatosService
      .deleteContatos(id)
      .subscribe(() => {
        console.log('Contato excluído:', id);

      });
  }
}
