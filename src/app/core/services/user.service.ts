import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resourceUrl = `${environment.apiUrl}/people/`

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.resourceUrl)
      .pipe(
        map((data: any) => {
          return data.results.map((jedi, index) =>
            new User(index + 1, jedi.name, jedi.gender, jedi.birth_year))
        })
      );
  }
  getUser( id ) {
    return this.httpClient.get(this.resourceUrl+id)
      .pipe(
        map((data: any) => {
          console.log(data)
          return new User(id, data.name, data.gender, data.birth_year,data.height, data.mass, data.eye_color, data.hair_color, data.skin_color)
        })
      );
  }
}
