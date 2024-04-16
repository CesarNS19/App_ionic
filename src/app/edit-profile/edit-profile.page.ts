import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    nuevo!:boolean
    nombre!: string;
    apellido!: string;
    email!: string;
    password!: string;
    ip !: string;
  constructor(private http:HttpClient) {
    this.ip = "192.168.1.95";
    this.nuevo=true;
   }   

  ngOnInit() {
  }

  guardarCambios(id: string) {
    this.http.get<any>("http://" + this.ip + "/servicios/buscar_usuario.php?id_usuario=" + id).subscribe(
      (res) => {
        console.log(res);
        let usuario: any;
        usuario = res;
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
        this.email = usuario.email;
        this.password = usuario.password;
        this.nuevo = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
