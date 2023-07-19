import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'AppliedStudies', component:  EstudiosComponent},
  { path: '**', component: HomeComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
