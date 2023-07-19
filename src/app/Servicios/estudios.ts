export class Estudio {
  public nombreCurso: string = '';
  private descripcion: string = '';
  private img: string = '';

  constructor(nombreCurso: string, descripcion: string, img:string)
  {
      this.nombreCurso = nombreCurso;
      this.descripcion = descripcion;
      this.img = img;

  }

  public setNombre(nombre: string): void {
    this.nombreCurso = nombre;
  }
  public getNombre(): string {
    return this.nombreCurso;
  }
  public setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }
  public getDescripcion(): string {
   return this.descripcion;
  }
  public setImage(img: string): void {
    this.img = img;
  }
  public getImage(): string {
   return this.img;
  }

}
