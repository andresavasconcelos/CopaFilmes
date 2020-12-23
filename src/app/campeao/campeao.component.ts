import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeao',
  templateUrl: './campeao.component.html',
  styleUrls: ['./campeao.component.css']
})
export class CampeaoComponent implements OnInit {

  public titulo = "Campeão";


  public filmes = [
    {id: "tt4154756",  nome: 'Vingadores: Guerra Infinita', descricao: 'lala', image:'assets/images/5.png', ano: 2018, nota: 8.8, posicao: '1º'},
    {id: "tt3606756",  nome: 'Os Incríveis 2', descricao: 'la', image:'assets/images/1.png', ano: 2018, nota: 8.5, posicao: '2º'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
