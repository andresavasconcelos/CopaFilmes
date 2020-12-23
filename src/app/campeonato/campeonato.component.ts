import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent implements OnInit {

  public titulo = "Campeonato";

  public count = 0;

  @Output() status = new EventEmitter<boolean>();

  isDisabled: boolean = true;


  public filmes = [
    {id: "tt3606756",  nome: 'Os Incríveis 2', descricao: 'A Mulher Elástica entra em ação para salvar o dia, enquanto o Sr. Incrível enfrenta seu maior desafio até agora: cuidar dos problemas de seus três filhos.', image:'assets/images/1.png', ano: 2018, nota: 7},
    {id: "tt4881806",  nome: 'Jurassic World: Reino Ameaçado', descricao: 'Owen e Claire retornam à ilha Nublar para salvar os dinossauros restantes de um vulcão que está prestes a entrar em erupção. Eles encontram novas e aterrorizantes raças de dinossauros gigantes ao descobrir uma conspiração que ameaça todo o planeta.', image:'assets/images/2.png', ano: 2018, nota: 7.8},
    {id: "tt5164214",  nome: 'Oito Mulheres e um Segredo', descricao: 'Recém-saída da prisão, Debbie Ocean logo procura sua ex-parceira Lou para realizar um elaborado assalto: roubar um colar de diamantes no valor de US$ 150 milhões, que a empresa Cartier mantém sempre em um cofre. ', image:'assets/images/3.png', ano: 2018, nota: 8.8},
    {id: "tt7784604",  nome: 'Hereditário', descricao: 'Após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. Mesmo após a partida da matriarca, ela permanece como se fosse uma sombra sobre a família, especialmente sobre a solitária neta adolescente, Charlie, por quem ela sempre manteve uma fascinação não usual', image:'assets/images/4.png', ano: 2018, nota: 8},
    {id: "tt4154756",  nome: 'Vingadores: Guerra Infinita', descricao: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.', image:'assets/images/5.png', ano: 2018, nota: 8.8, posicao: '1º'},
    {id: "tt4154756",  nome: 'Deadpool 2', descricao: 'O supersoldado Cable vem do futuro com a missão de assassinar o jovem mutante Russel e o mercenário Deadpool precisa aprender o que é ser herói de verdade para salvá-lo.', image:'assets/images/6.png', ano: 2018, nota: 8.7},
    {id: "tt5463162",  nome: 'Han Solo: Uma História Star Wars', descricao: "Em dificuldade financeira, o piloto Han Solo e sua namorada Qi'ra buscam trabalho. Eles colocam as mãos em uma substância valiosa, mas perigosa, e que acaba levando à perseguição do Império e à separação entre os dois.", image:'assets/images/7.png', ano: 2018, nota: 8},
    {id: "tt3778644",  nome: 'Thor: Ragnarok', descricao: 'Após anos afastado, Thor retorna para casa e descobre que seu pai Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte. ', image:'assets/images/8.png', ano: 2018, nota: 8},

  ];

  addToCart(){
    this.count = 1;
  }

  addItem(){
    this.count=this.count+1;
    console.log('plus is : '+this.count)
  }

  back(){
    this.count = 0;
  }

  constructor() {}

  ngOnInit(): void {
  }
}
