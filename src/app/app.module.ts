import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './appRouting';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormularioPersona } from './componentes/formulario/Formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AboutComponent } from './componentes/about/about.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioPersona,
    AboutComponent,
    ProjectsComponent,
    EstudiosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
     MatIconModule,
    MatGridListModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
