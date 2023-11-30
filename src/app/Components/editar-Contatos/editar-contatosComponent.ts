import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contatos } from '../../Models/contatosModel';
import { ContatosService } from '../../Services/contatos-service';

@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatosComponent.html',
  styleUrls: ['./editar-contatosComponent.css'],
})
export class EditarContatosComponent implements OnInit {
editarContato(_t2: any) {
throw new Error('Method not implemented.');
}
  @Input() contato?: Contatos;
  contatosForm!: FormGroup;

  constructor(private fb: FormBuilder, private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contatosForm = this.fb.group({
      nome: [this.contato?.nome || '', Validators.required],
      celular: [this.contato?.celular || '', Validators.required],
      email: [this.contato?.email || '', [Validators.required, Validators.email]],
      favorito: [this.contato?.favorito || false],
    });
  }

  onSubmit(): void {
    if (this.contato) {
      // Atualizar contato
      this.contatosService
        .updateContatos(this.contato)
        .subscribe((updatedContato) => {
          console.log('Contato atualizado:', updatedContato);
          // Adicione lógica para atualizar a lista de contatos após a edição
        });
    }
  }
}
