import { Component } from '@angular/core';
import {Project} from '../../shared/app.models';
import {ProjectComponent} from '../../components/project/project.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, NgForOf],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  projects: Project[] = [
    // {
    //   title: 'Ft_transcendence - a fullstack web application',
    //   description: 'It\'s a pong game, and it supports multiplayer mode, can be customized as well. Uses JWT for authentication and a QR code system.',
    //   stack: ['Python/Django', 'Vue.js', 'PostgreSQL', 'Docker', 'Gunicorn'],
    //   link: 'https://github.com/uness7/ft_transcendence',
    //   video: './media/vids/cub3d_review_2.mp4',
    // },
    {
      title: 'Cub3d - a raycasting project',
      description: 'The idea is to build a project in c language to mimic the behavior of the popular game Wolfenstein, the project was validated with a score of 100%',
      stack: ['C language'],
      link: 'https://github.com/uness7/cub3d',
      video: './media/vids/cub3d_review_2.mp4',
    },
    // {
    //   title: 'Minishell - a basic version of bash',
    //   description: 'A personal portfolio to showcase my work and skills.',
    //   stack: ['C language', 'Unix programming'],
    //   link: 'https://github.com/uness7/minishell',
    //   video: './media/vids/cub3d_review_2.mp4',
    // },
    // {
    //   title: 'Inception - a dockerized wordpress website',
    //   description: 'A personal portfolio to showcase my work and skills.',
    //   stack: ['Mariadb', 'Wordpress', 'Docker'],
    //   link: 'https://github.com/uness7/inception',
    //   video: './media/vids/cub3d_review_2.mp4',
    // },

  ];

  constructor() {
    //
  }


}
