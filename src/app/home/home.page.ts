import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToProductsPage() {
    this.router.navigateByUrl('/productos'); 
  }
  
  goToLoginPage() {
    this.router.navigateByUrl('/login'); 
  }
}
