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
  public items: string[] = []
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
          , ...(<any>data).results.map(x => x.title)
        ].sort();

      }
      , error => console.log(error)
    );
  }

}
