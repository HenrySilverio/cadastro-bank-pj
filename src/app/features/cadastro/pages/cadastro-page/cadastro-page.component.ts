import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CadastroFormComponent } from '../../components/cadastro-form/cadastro-form.component';

@Component({
  selector: 'app-cadastro-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatStepperModule,
    MatCardModule,
    TranslateModule,
    CadastroFormComponent
  ],
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.scss']
})
export class CadastroPageComponent implements OnInit {
  currentStep: number = 0;
  
  constructor(private translateService: TranslateService) {
    // Inicializa o serviço de tradução com português como padrão
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
  }

  ngOnInit(): void {
  }

  /**
   * Altera o idioma da aplicação
   * @param lang Código do idioma (pt-BR ou en)
   */
  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }

  /**
   * Avança para o próximo passo
   */
  nextStep(): void {
    this.currentStep++;
  }

  /**
   * Retorna ao passo anterior
   */
  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
