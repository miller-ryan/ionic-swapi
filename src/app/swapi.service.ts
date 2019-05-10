import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, empty } from 'rxjs';
import { expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) {}

    getPlanets() {
      return this.httpSvc.get("https://swapi.co/api/planets").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }

    getFilms() {
      return this.httpSvc.get("https://swapi.co/api/films").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }

    getPeople() {
      return this.httpSvc.get("https://swapi.co/api/people").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }

    getSpecies() {
      return this.httpSvc.get("https://swapi.co/api/species").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }

    getStarships() {
      return this.httpSvc.get("https://swapi.co/api/starships").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }
    
    getVehicles() {
      return this.httpSvc.get("https://swapi.co/api/vehicles").pipe(
        expand( data => 
          (<any>data).next ? this.httpSvc.get((<any>data).next) : empty() 
        )
      );
    }
}