import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './model/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
ip!: string;
nuevo!: boolean;
productos:any ;
  txtma !:number ;
  txtnm !:string ;
  txtca !:string ;
  txtgr !:number ;
  constructor(public http:HttpClient){
    this.ip='192.168.2.129';
    this.nuevo=true;
    this.listaproductos();
    
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

  saveProducto(){
    let alumno=new Producto(this.txtma, this.txtnm, this.txtca, this.txtgr);
    this.http.post("http://"+this.ip+"/servicios/addalumnos.php", alumno).subscribe(

    (res)=>{
      console.log(res);
      this.listaproductos();
      this.Reset();
    
    },
    (error)=>{
      console.log(error);
    }
    );
}
EliminarProducto(mat:string){
    this.http.get("http://"+this.ip+"/servicios/delarticulo.php?matricula="+mat).subscribe(
    (res)=>{
        console.log(res);
        this.listaproductos();
        alert("eliminado correctamente");
    },
    (error)=>{
      console.log(error);
    }
    );

}
EditarProducto(mat:string){
    this.http.get("http://"+this.ip+"/servicios/busarticulo.php?id_producto="+mat).subscribe(
      (res)=>{
        console.log(res);
        let alumn:any;
        alumn=res;
        this.txtma=alumn[0].matricula;
        this.txtnm=alumn[0].nombre;
        this.txtca=alumn[0].carrera;
        this.txtgr=alumn[0].grupo;
        this.nuevo=false;
      },
      (error)=>{
        console.log(error);
      }
    )
}
upAlumno(){
  
  let alumn=new Producto(this.txtma, this.txtnm, this.txtca, this.txtgr);
  this.http.post("http://"+this.ip+"/servicios/actualizaralumnos.php",alumn).subscribe(
    (res)=>{
      console.log(res)
      alert("se guardo correctamente el registro")
    },
    (error)=>{
      console.log(error)
    }
  );
  this.nuevo=true;
  this.Reset();
}
Reset(){
 
  this.txtma=0;
  this.txtnm=" ";
  this.txtca=" ";
  this.txtgr=0;
  this.listaproductos();
}

}
