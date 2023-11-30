import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatosService } from '../../Services/contatos-service';


@Component({
  selector: 'app-adicionar-contatos',
  templateUrl: './adicionar-contatos.component.html',
  styleUrls: ['./adicionar-contatos.component.css'],
})
export class AdicionarContatosComponent implements OnInit {
  contatosForm!: FormGroup;
  novoContato: any;
  constructor(private fb: FormBuilder, private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contatosForm = this.fb.group({
      nome: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      favorito: [false],
    });
  }

  onSubmit(): void {
    this.contatosService.addContatos(this.contatosForm.value).subscribe((newContatos: any) => {
      console.log('Contato adicionado:', newContatos);
      });
  }
}


