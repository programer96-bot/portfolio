import { Component } from '@angular/core';
import { Estudio } from 'src/app/Servicios/estudios';
import { ServiciosService } from 'src/app/Servicios/servicios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent {
  public estudios: Array<Estudio>
  constructor(private servicioCursos: ServiciosService){
    this.estudios = new Array();
    
    this.mostrarServicio();
  }

  public mostrarServicio(){
    this.estudios = this.servicioCursos.getArregloEstudio();
    console.log(this.servicioCursos.getArregloEstudio);
  }


}
