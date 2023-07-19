import { Component } from "@angular/core";

@Component({
  selector: 'formulario',
  templateUrl: './formulario.componente.html'
})
export class FormularioPersona{
  public nombre: string = ""
  public correo: string = ""

  formularioValido(): Boolean{

      return this.validacion();


  }
  enviarCorreo() {
    const texto = 'Agregar Asunto';
    const mensaje = `Nombre: ${this.nombre}%0D%0ACorreo electrónico: ${this.correo}`;

    window.location.href = `mailto:extebancarrera96@gmail.com?subject=${texto}&body=${mensaje}`;
  }
  public validacion(): Boolean{
      if (this.nombre != "" && this.correo != ""){
        return false;
      }
      else{
        return true;
      }
  }


}






