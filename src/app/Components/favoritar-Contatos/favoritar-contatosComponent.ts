import { Component, Input } from '@angular/core';
import { Contatos } from '../../Models/contatosModel';
import { ContatosService } from '../../Services/contatos-service';

@Component({
  selector: 'app-favoritar-contatos',
  template: `
    <button (click)="toggleFavorite()">
      {{ contato?.favorito ? 'Desfavoritar' : 'Favoritar' }}
    </button>
  `,
})
export class FavoritarContatosComponent {
  @Input() contato?: Contatos;

  constructor(private contatosService: ContatosService) {}

  toggleFavorite(): void {
    if (this.contato) {
      this.contato.favorito = !this.contato.favorito;
      this.contatosService
        .updateContatos(this.contato)
        .subscribe((updatedContato) => {
          console.log('Contato atualizado:', updatedContato);

        });
    }
  }
}
