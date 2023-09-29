import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hello!',
      message: 'This is an alert!',
      buttons: ['OK']
    });

    await alert.present();
  }

  goToAbout(){
    this.router.navigate(['/about']);
  }
}
