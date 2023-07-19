import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  public items: any;
  public cargando: boolean = true;

constructor(){

}

  ngOnInit(): void {
    setTimeout(() =>{
    this.cargando = false;
    },2500);
  }
}
