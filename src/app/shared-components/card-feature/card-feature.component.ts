import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-feature',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss']
})
export class CardFeatureComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
