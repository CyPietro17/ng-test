import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://dummyjson.com';

  users: User[] = [];
  error: string | null = null;

  serviceOnInit() {
    this.getUsers().subscribe({
      next: (data: UsersByDummy) => {
        this.users = data.users;
      },
      error: (error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert("C'è stato un errore con il server, riprova più tardi.");
        console.error(errorMessage, { error });
      },
    });
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, body: User): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body);
  }

  getUsers(): Observable<UsersByDummy> {
    return this.get<UsersByDummy>('/users');
  }

  postUser(user: User): Observable<User> {
    return this.post<User>('/users/add', user);
  }

  usersBlog() {
    return this.users;
  }
  addUser(user: User) {
    this.users.push(user);
  }

  InitUsers() {
    let u: User;
    u = {
      id: 31,
      firstName: 'Pietro',
      lastName: 'Salvatore',
      username: 'petrov17',
      email: 'pietro@angular.js',
      postsId: [100, 102],
    };
    this.users.push(u);
    u = {
      id: 32,
      firstName: 'Pasquale',
      lastName: 'Mennella',
      username: 'paky12',
      email: 'pasquale@angular.js',
      postsId: [101, 103],
    };
    this.users.push(u);
    u = {
      id: 33,
      firstName: 'Alessandro',
      lastName: 'Volta',
      username: 'XiU',
      email: 'alexiu@angular.js',
      postsId: [104],
    };
    this.users.push(u);
  }
}
