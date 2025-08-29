import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardFeatureComponent } from '../../shared-components/card-feature/card-feature.component';
import { HeaderComponent } from '../../shared-components/header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [IonicModule, CommonModule, CardFeatureComponent, HeaderComponent],
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage {}
