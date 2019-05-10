import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: string[] = []
  constructor(
      private fooSvc: SharedDataService
      , private swapiSvc: SwapiService
    ){}

  ngOnInit() {
    this.swapiSvc.getSpecies().subscribe(
      data => {
        console.log(data);
        this.items = [
          ...this.items
          , ...(<any>data).results.map(x => x.name)
        ].sort();

      }
      , error => console.log(error)
    );
  }

}
