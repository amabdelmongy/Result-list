import { Component } from '@angular/core';
import { Tariff } from './tariff';
import { TariffService } from './tariff.service'
import {SelectItem} from 'primeng/api'; 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tariffs: Tariff[];
  selectedTarif: Tariff;

  sortOptions: SelectItem[];
  sortField: string = "price";
  sortOrder: number= 1;
  sortDirections: SelectItem[];

  constructor(private tariffService: TariffService) {
  }

  ngOnInit() {
    this.tariffService.getTarifs().then(tarifs => this.tariffs = tarifs);
    //Todo it's better to do sort on server side 
    this.sortOptions = [ 
      {label: 'Download Speed', value: 'downloadSpeed'}, 
      {label: 'Upload Speed', value: 'uploadSpeed'}, 
      {label: 'Price', value: 'price'}, 
      ];

      this.sortDirections = [
        {label: 'Asc', value: 1 },
        {label: 'Desc', value: -1 },
      ]
  }

  onSortOrderChange(event) {
    this.sortOrder = event.value;
  }
  onSortChange(event) {
    this.sortField = event.value;
  }
}
