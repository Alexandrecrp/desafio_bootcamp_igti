import { Component, OnInit } from '@angular/core';

import { Senadores, SenadoresService } from '../senadores.service';

@Component({
  selector: 'app-senador-list',
  templateUrl: './senador-list.component.html',
  styleUrls: ['./senador-list.component.css'],
})
export class SenadorListComponent implements OnInit {
  senadores: Senadores[] = [];

  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.listSenadores().subscribe((senadores) => {
      this.senadores = senadores;
    });
  }
}
