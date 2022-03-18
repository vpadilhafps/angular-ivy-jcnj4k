import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards: any[] = [
    {
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      title: 'Angular',
      description:
        'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.',
      extraInfo: 'Lançamento: 14 setembro 2016; há 5 anos',
    },
    {
      imgUrl: 'https://logospng.org/download/react/logo-react-256.png',
      title: 'React',
      description:
        'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros',
      extraInfo: 'Lançamento: 29 de maio de 2013 (8 anos)',
    },
    {
      imgUrl: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
      title: 'Vue.js',
      description:
        'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
      extraInfo: 'Lançamento: Fevereiro de 2014; há 5 anos',
    }
  ];

  aulas: any[] = [
    { nome: 'Programação', conteudo: 'Java', quantidade: 15 },
    { nome: 'Engenharia de Software', conteudo: 'Testes', quantidade: 10 },
    { nome: 'Arquitetura de Software', conteudo: 'Rest', quantidade: 8 },
  ];

  nomes: string[] = ['Carlos', 'João', 'Maria', 'José', 'Igor'];

  date: Date = new Date();

  valor: number = 12.13;

  textoQualquer: string = 'Um texto qualquer';

  urlImage: string = 'https://picsum.photos/200';

  isError: boolean = true;

  buttonColor: string = 'VERDE';

  constructor() {
    setInterval(() => {
      this.isError = !this.isError;
      this.date = new Date();
    }, 1000);
  }

  onKeyUp(event) {
    console.log('keyup', event.target.value);
  }

  getClassName(): string {
    return 'alert-danger';
  }

  getValor(): number {
    return 100;
  }

  toUppercase(value: string): string {
    return value.toUpperCase();
  }
}
