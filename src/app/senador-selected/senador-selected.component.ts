import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Despesas, Senadores, SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-senador-selected',
  templateUrl: './senador-selected.component.html',
  styleUrls: ['./senador-selected.component.css'],
})
export class SenadorSelectedComponent implements OnInit {
  id: number;
  totalDesp: number;

  despesasSenadores: Senadores = {
    id: 0,
    nomeSenador: '',
    despesas: [],
  };

  camposDespesas: {};

  constructor(
    private senadoresService: SenadoresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.senadoresService
        .retrieveSenadores(this.id)
        .subscribe((despesasSenadores) => {
          this.despesasSenadores = despesasSenadores;
          this.camposDespesas = this.despesasResumo();
          this.totalDesp = this.totalGeralDespesa();
        });
    });
  }

  totalGeralDespesa() {
    const total = this.despesasResumo().reduce((accumulator, current) => {
      return accumulator + current.total;
    }, 0);
    return total;
  }

  despesasResumo() {
    let camposDespesas = [];
    this.despesasSenadores.despesas.forEach((camposDespesa) => {
      let temDespesa = camposDespesas.find((temDespesa) => {
        return temDespesa.id === camposDespesa.tipo;
      });
      if (temDespesa) {
        temDespesa.total = temDespesa.total + camposDespesa.valor;
      } else {
        let gastos = {};
        switch (camposDespesa.tipo) {
          case 1:
            gastos = {
              id: 1,
              descricao: 'Aluguel de imóveis e despesas concernentes a eles',
              total: camposDespesa.valor,
            };
            break;
          case 2:
            gastos = {
              id: 2,
              descricao: 'Divulgação da atividade parlamentar',
              total: camposDespesa.valor,
            };
            break;
          case 3:
            gastos = {
              id: 3,
              descricao:
                'Aquisição de material de consumo para uso no escritório',
              total: camposDespesa.valor,
            };
            break;
          case 4:
            gastos = {
              id: 4,
              descricao: 'Passagens aéreas, aquáticas e terrestres nacionais.',
              total: camposDespesa.valor,
            };
            break;
          case 5:
            gastos = {
              id: 5,
              descricao:
                'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.',
              total: camposDespesa.valor,
            };
            break;
          case 6:
            gastos = {
              id: 6,
              descricao: 'Locomoção, hospedagem, alimentação e combustíveis.',
              total: camposDespesa.valor,
            };
            break;
          case 7:
            gastos = {
              id: 7,
              descricao: 'Serviços de Segurança Privada',
              total: camposDespesa.valor,
            };
            break;
          default:
            break;
        }
        camposDespesas.push(gastos);
      }
    });
    return camposDespesas;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
