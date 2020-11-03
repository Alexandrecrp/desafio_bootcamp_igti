import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Despesas {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}

export interface Senadores {
  id: number;
  nomeSenador: string;
  despesas?: Despesas[];
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class SenadoresService {
  constructor(private http: HttpClient) {}

  listSenadores() {
    return this.http.get<Senadores[]>(`${urlBase}/senadores?_sort=id`);
  }

  retrieveSenadores(id: number) {
    return this.http.get<Senadores>(`${urlBase}/despesasSenadores/${id}`);
  }
}
