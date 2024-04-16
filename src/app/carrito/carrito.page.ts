import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importar el controlador de alerta

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController, // Inyectar el controlador de alerta
    private changeDetectorRef: ChangeDetectorRef // Inyectar ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['carrito']) {
        this.carrito = JSON.parse(params['carrito']);
        console.log('Carrito cargado:', this.carrito);
      }
    });
  }
  
  
  async vaciarCarrito() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas vaciar el carrito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Vaciar',
          handler: () => {
            this.carrito = [];
            console.log('Carrito vaciado:', this.carrito);
          }
        }
      ]
    });
    await alert.present();
  }
  
  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter((item: any) => item !== producto);
    console.log('Producto eliminado del carrito:', producto);
  }
  

  // Función para proceder al pago
  procederAlPago() {
    // Aquí puedes agregar la lógica para procesar el pago y navegar a la siguiente página
    console.log("Proceder al pago...");
  }

}
