import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage implements OnInit {

  @Input() publicadores : Array<any>;

  
  publicador: any = {}; 
  public horaInicio : Date;
  ngOnInit(): void {
    this.horaInicio = new Date();
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.publicadores = navParams.data;
  }

  ionViewDidLoad() {
    
  }

}
