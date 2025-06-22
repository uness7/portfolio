import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

    private themeSubject = new BehaviorSubject<'light' | 'dark'>('dark');
    theme$ = this.themeSubject.asObservable();

    constructor() { }

    toggleTheme() {
        const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
        this.themeSubject.next(newTheme);
    }

    getCurrentTheme() {
        return this.themeSubject.value;
    }

}
