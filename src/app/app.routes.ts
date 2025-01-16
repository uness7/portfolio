import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import {HomeComponent} from './pages/home/home.component';
import {BlogsComponent} from './pages/blogs/blogs.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogsComponent },
];
