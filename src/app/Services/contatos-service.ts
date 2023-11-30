import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contatos } from '../Models/contatosModel';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  getContatos() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Obter todos os contatos
  getAllContatos(): Observable<Contatos[]> {
    return this.http.get<Contatos[]>(this.apiUrl);
  }

  // Obter um contato pelo ID
  getContatosById(id: number): Observable<Contatos> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Contatos>(url);
  }

  // Adicionar um novo contato
  addContatos(contatos: Contatos): Observable<Contatos> {
    return this.http.post<Contatos>(`${this.apiUrl}/api/contatos`, contatos);
  }

  // Atualizar um contato
  updateContatos(contatos: Contatos): Observable<Contatos> {
    const url = `${this.apiUrl}/${contatos.id}`;
    return this.http.put<Contatos>(url, contatos);
  }

  // Excluir um contato
  deleteContatos(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
