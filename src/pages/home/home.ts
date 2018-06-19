import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TestePage} from '../teste/teste';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public publicadores1 : Array<any> = [{nome:"Jessé"}];
  public publicadores2 : Array<any> = [{nome:"Daniela"}];
  public publicadores3 : Array<any> = [{nome:"Nair"}];
  public publicadores4 : Array<any> = [{nome:"Danúbia"}];
  
  testePage = TestePage;
  constructor(public navCtrl: NavController) {

  }

  public ngOnInit(): void {
    

  }
}
