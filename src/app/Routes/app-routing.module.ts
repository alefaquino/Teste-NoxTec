
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarContatosComponent } from '../Components/adicionar-Contatos/adicionar-contatos.component';
import { ConsultarContatosComponent } from '../Components/consultar-Contatos/consultar-contatosComponent';
import { EditarContatosComponent } from '../Components/editar-Contatos/editar-contatosComponent';
import { ExcluirContatosComponent } from '../Components/excluir-Contatos/excluir-contatosComponent';

const routes: Routes = [

  { path: 'app-adicionar-contatos', component: AdicionarContatosComponent },
  { path: 'app-consultar-contatos', component: ConsultarContatosComponent},
  { path: 'app-editar-contatos', component: EditarContatosComponent},
  { path: 'app-favoritar-contatos', component: EditarContatosComponent},
  { path: 'app-excluir-contatos', component: ExcluirContatosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
