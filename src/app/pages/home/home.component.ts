import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import {IntroComponent} from "../../components/intro/intro.component";

@Component({
  selector: 'app-home',
    imports: [
        RouterLink,
        SkillsComponent,
        IntroComponent
    ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly ProjectsComponent = ProjectsComponent;
}
