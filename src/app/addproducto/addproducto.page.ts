import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from './model/Producto';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.page.html',
  styleUrls: ['./addproducto.page.scss'],
})
export class AddproductoPage implements OnInit {
  txtma !:number ;
  txtnm !:string ;
  txtca !:string ;
  txtgr !:number ;
  ip!: string;
  nuevo!: boolean;
  constructor(private router:Router, public http:HttpClient) { 
    this.ip='192.168.1.76';
    this.nuevo=true;
  }
  saveProducto(){
    let alumno=new Producto(this.txtma, this.txtnm, this.txtca, this.txtgr);
    this.http.post("http://"+this.ip+"/servicios/addarticulos.php", alumno).subscribe(

    (res)=>{
      console.log(res);
      this.Reset();
    
    },
    (error)=>{
      console.log(error);
    }
    );
}
upProducto() {
  const alumn = new Producto(this.txtma, this.txtnm, this.txtca, this.txtgr);
  this.http.post('http://' + this.ip + '/servicios/actualizararticulos.php', alumn).subscribe(
    (res) => {
      console.log(res);
      alert('Registro actualizado correctamente');
      this.nuevo = true;
      this.Reset();
    },
    (error) => {
      console.log(error);
    }
  );
}
Reset(){
 
  this.txtma=0;
  this.txtnm=" ";
  this.txtca=" ";
  this.txtgr=0;
}
  ngOnInit() {
  }
  goToProfile() {

  }

  goToAbout() {
  }

  Logout() {
    this.router.navigateByUrl('/login');
  }
}
