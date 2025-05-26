import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  /**
   * Simula o envio de dados para uma API
   * @param empresa Dados da empresa a ser cadastrada
   * @returns Observable com resposta de sucesso após delay simulado
   */
  cadastrarEmpresa(empresa: Empresa): Observable<{success: boolean, message: string}> {
    console.log('Dados enviados:', empresa);
    
    // Simula um delay de 2 segundos para mostrar o loading
    return of({
      success: true,
      message: 'Empresa cadastrada com sucesso!'
    }).pipe(
      delay(2000)
    );
  }

  /**
   * Retorna lista de áreas de atuação para o dropdown
   */
  getAreasAtuacao(): Observable<string[]> {
    return of([
      'Agronegócio',
      'Comércio',
      'Construção',
      'Educação',
      'Indústria',
      'Saúde',
      'Serviços',
      'Tecnologia',
      'Transporte',
      'Outro'
    ]);
  }
}
