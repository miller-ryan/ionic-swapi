import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

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
  public items: any[] = [];
  public planets: any[] = [];

  automaticClose = true;

  constructor(
      private fooSvc: SharedDataService
      , private swapiSvc: SwapiService
    ){}

  ngOnInit() {
    this.swapiSvc.getFilms().subscribe(
      data => {
        console.log(data);
        this.items = [
          ...this.items
          , ...(<any>data).results
        ].sort();
        console.log(this.items);
      }
      , error => console.log(error)
    );
  }

  getPlanetInfo(url) {
    this.swapiSvc.getUlrlData(url).subscribe(

      additionalData => {
        this.planets = [
          ...this.planets
          , ...(<any>additionalData).results
        ].sort();
        console.log(this.planets);
      }
      , error => console.log(error)
    );
  }



  toggleSection(index) {
    console.log(this.items[index])
    this.items[index].open = !this.items[index].open;

    if (this.automaticClose && this.items[index].open) {
      this.items
      .filter((item, itemIndex) => itemIndex !=  index)
      .map (item => item.open = false);
    }

  }

}
