import { Injectable } from '@angular/core';
import { Estudio } from './estudios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

private cursos: Array<Estudio>;

constructor(){
  this.cursos = new Array();
  this.setArregloEstudio();
}

public setArregloEstudio():void{
    this.cursos =[
        new Estudio("Scrum Foundations", "Scrum Foundation Professional Certificate", "../../assets/img/scrum.jpg"),
        new Estudio("Java Fundamentals", "Fundamentos en Java", "../../assets/img/certificadoOracle.jpg"),
        new Estudio("Java Foundations", "Java SE", "../../assets/img/course_certificate.jpg"),
        new Estudio("Universidad Java", "Aprende Java Desde Cero a Experto", "../../assets/img/universidadJava.jpg"),
        new Estudio("AWS PRACTITIONER", "AWS CLOUD PRACTITIONER", "../../assets/img/AWS.jpg"),

  ];
}

public getArregloEstudio():Array<Estudio>{
  console.log(this.cursos)
  return this.cursos;
}
}
