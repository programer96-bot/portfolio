import { Component, OnInit } from '@angular/core';
import { Esteban } from '../../models/misDatos/MisDatos';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit {
  public title: string = 'BIENVENIDO';
  public sigueme: string = "Encuentrame Aqui";
 public esteban;
 public columna: number = 1;
//  public cargando: boolean = true;


 constructor() {

  this.esteban = Esteban;
  //inicializar columna
  this.setColumna();

//suscribirse al evento resize
  window.addEventListener('resize', () => {
    this.setColumna();
  });
}


ngOnInit(): void {
    // setTimeout(() =>{
    // this.cargando = false;
    // },1000);
}

    miFacebook(){
      window.open('https://www.facebook.com/esteban.perdomo.1675', '_blank');

  }

  miWhatssap(){
    window.open('https://api.whatsapp.com/send?phone=3126737336', '_blank');
}

miLinkedin(){
  window.open('https://www.linkedin.com/in/lizardo-esteban-perdomo-carrera-b87b14174/', '_blank');
}

private setColumna(): void {
  if (window.innerWidth < 762) {
    this.columna = 1;
    console.log("cambio realizado");
  } else {
    this.columna = 2;
  }
}




}
