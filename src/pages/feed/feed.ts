import { MoovieProvider } from '../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers : [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Andressa Ferreira",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!Whoa. This is heavy",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array <any>();

  public nome_usuario:string = "Andressa Ferreira";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MoovieProvider: MoovieProvider) {
  }

  public somaDoisNumeros (num1:number, num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.MoovieProvider.getLatestMovies().subscribe(
      data => {

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    );
  }

}
