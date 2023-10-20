import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class StandaloneComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
