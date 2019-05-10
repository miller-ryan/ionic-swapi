import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.page.html',
  styleUrls: ['./starship.page.scss'],
})
export class StarshipPage implements OnInit {

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
    this.swapiSvc.getStarships().subscribe(
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
