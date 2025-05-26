import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { CadastroService } from '../../services/cadastro.service';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    TranslateModule
  ],
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  cadastroForm!: FormGroup;
  areasAtuacao: string[] = [];
  loading = false;
  submitted = false;
  success = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadAreasAtuacao();
  }

  initForm(): void {
    this.cadastroForm = this.fb.group({
      razaoSocial: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      nomeResponsavel: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      emailCorporativo: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}\-\d{4}$/)]],
      areaAtuacao: ['', Validators.required]
    });
  }

  loadAreasAtuacao(): void {
    this.cadastroService.getAreasAtuacao().subscribe(areas => {
      this.areasAtuacao = areas;
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.cadastroForm.invalid) {
      return;
    }
    
    this.loading = true;
    this.success = false;
    this.errorMessage = '';
    
    const empresa: Empresa = this.cadastroForm.value;
    
    this.cadastroService.cadastrarEmpresa(empresa).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.success) {
          this.success = true;
          this.cadastroForm.reset();
          this.submitted = false;
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.';
        console.error('Erro ao cadastrar empresa:', error);
      }
    });
  }

  // Getters para facilitar o acesso aos campos do formulário no template
  get f() { return this.cadastroForm.controls; }
}
