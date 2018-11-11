
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DishesModel} from '../shared/dishes.model';
import { map } from 'rxjs/operators';

const DB_JSON = 'http://localhost:3000/Dishes';
@Injectable()
export class AppMenuService {


  constructor(private http: HttpClient) {}

  getDish(): Observable<DishesModel[]> {
    return this.http.get<DishesModel[]>(DB_JSON);
  }

  getSelectedDish(id: number | string) {
    return this.getDish().pipe(
      // (+) before `id` turns the string into a number
      map((dishes: DishesModel[]) => dishes.find(dish => dish.id === +id))
    );
  }
}





























//
// const USER_SERVICE = 'http://localhost:3000/';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'my-auth-token'
//   })
// }

//
// deleteUser(userId: number): Observable<User> {
//   return this.http.delete<User>(USER_SERVICE + 'user/' + userId, httpOptions);
// }
//
// onAddService(user: User): Observable<User> {
//   return this.http.put<User>(USER_SERVICE + 'user', user, httpOptions);
// }
//
// addNewUser(user: User): Observable<User> {
//   return this.http.post<User>(USER_SERVICE + 'user', user, httpOptions);
// }
