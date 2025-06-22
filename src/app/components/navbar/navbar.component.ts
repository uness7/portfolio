import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {

    constructor(private themeService : ThemeService) {
        //
    }

    ngOnInit(): void {
        this.themeService.theme$.subscribe(theme => {
            document.body.classList.remove('bg-gray-900', 'bg-zinc-200', 'text-white', 'text-gray-900');
            if (theme === 'dark') {
                document.body.classList.add('bg-gray-900', 'text-white');
            } else {
                document.body.classList.add('bg-zinc-200', 'text-gray-900');
            }
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
