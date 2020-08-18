import { Component } from '@angular/core';
import { NavController, IonImg } from '@ionic/angular';

@Component({
  selector: 'app-tresenraya',
  templateUrl: 'tresenraya.page.html',
  styleUrls: ['tresenraya.page.scss'],
})
export class TresenrayaPage {

  public inputValue = "";
  public currentPlayer = "";
  public cuenta = 1;
  public player = false;
  public mensaje = "";
  public jugador1puntaje = 0;
  public jugador2puntaje = 0;
  public victorias = [7, 56, 448, 73, 146, 292, 273, 84];

  constructor(private navCtrl: NavController) {

  }


contador(score){
    for(var i = 0; i < this.victorias.length; i++){
        if((this.victorias[i] & score)  === this.victorias[i]){
            if(this.currentPlayer == "Jugador1"){
                this.reset();
                alert("El Jugador con el símbolo X Gana");
            } else{
                this.reset();
                alert("El Jugador con el símbolo O Gana");
            }
        }    
    }
    if(this.cuenta == 10){
        alert("¡NADIE GANA!");
        this.reset();
    }
}
    
    
    placeTile(param){
      console.log("param " + param);
      this.cuenta += 1;
      if(this.cuenta %2 == 0){
        this.currentPlayer = "Jugador1";
        console.log(this.currentPlayer);
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        document.getElementById(param).textContent="X";
        this.jugador1puntaje += Number(param);
        console.log("Jugador1 puntaje:" + this.jugador1puntaje);
        this.contador(this.jugador1puntaje);
      }
      else if(this.cuenta %2 != 0){
        this.currentPlayer = "Jugador2";
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        this.jugador2puntaje += Number(param);
        document.getElementById(param).textContent="O";
        console.log("Jugador2 puntaje:"+this.jugador2puntaje);          
        this.contador(this.jugador2puntaje);
      }
  }
    
reset(){
    console.log("Reset y nueva partida");
    for(var i = 1; i < 512; i*2 ){
        var tile = <HTMLInputElement> document.getElementById(i.toString()); 
        if(tile != null || tile != undefined){
            tile.textContent="";
            tile.disabled = false;
            i+=i;
            console.log(i);
        }
    }
    this.jugador1puntaje = 0;
    this.jugador2puntaje = 0;
    this.cuenta=1;
    }
}