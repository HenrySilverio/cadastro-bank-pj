import { Routes } from '@angular/router';
import { CadastroPageComponent } from './features/cadastro/pages/cadastro-page/cadastro-page.component';

export const routes: Routes = [
  { path: '', component: CadastroPageComponent },
  { path: '**', redirectTo: '' }
];
