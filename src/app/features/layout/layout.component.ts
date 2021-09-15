import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ['']
})
export class LayoutComponent implements OnInit {

  navigations = [
    {
      'icon' : 'home',
      'link' : '/',
      'label' : 'Dashboard'
    },
    {
      'icon' : 'person',
      'link' : '/profile',
      'label' : 'Profile'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    localStorage.setItem('success','Application session logged out successfully.');
    this.router.navigate(['/crm']);
  }
  
} 