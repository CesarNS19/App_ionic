import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
ip!: string;
productos:any 
  constructor(private router:Router, private http: HttpClient) {
    this.ip = "192.168.1.76";
   }
  ngOnInit() {
    this.listaproductos();
  }

  listaproductos() {
    this.http.get("http://" + this.ip + "/servicios/listaarticulos.php").subscribe(
      (res) => {
        console.log(res);
        this.productos = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  goToProfile(){

  }
  goToAbout(){

  }
  Logout(){
    this.router.navigateByUrl('/login');
  }
}
