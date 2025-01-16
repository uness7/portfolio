import {Component, Input, input} from '@angular/core';
import {Project} from '../../shared/app.models';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  standalone: true,
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  @Input({ required: true }) project!: Project;

  constructor() {
    //
  }

}
