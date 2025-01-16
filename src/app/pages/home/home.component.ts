import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly ProjectsComponent = ProjectsComponent;
}
