import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../innterfaces/housing-location';

@Component({
  selector: 'app-housinglocations',
  templateUrl: './housinglocations.component.html',
  styleUrl: './housinglocations.component.css'
})
export class HousinglocationsComponent {

  @Input() housinglocation ! : HousingLocation;

}
