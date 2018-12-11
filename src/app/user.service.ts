import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';
import {User} from './user';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = "http://5adc8779b80f490014fb883a.mockapi.io";
@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){}

    getUsers():Observable<User[]>{
        return this.http.get<User[]>(API_URL+'/users');
    }
    searchUser(id:number):Observable<User[]>{
        return this.http.get<User[]>(API_URL+'/users/'+id);
    }
    updateUser(id:number,user:User):Observable<any>{
        return this.http.put(API_URL+'/users/'+id,user,httpOptions).pipe(
            tap(_=>console.log(`update user id=${user.id}`)),
            catchError(this.handleError<any>('updateUser'))
        )
    }
    addUser(user:User):Observable<any>{
        return this.http.post(API_URL+"/users",user,httpOptions).pipe(
            tap((user:User)=>console.log(`added user w/id=${user.id}`)),
            catchError(this.handleError<User>('addUser'))
        )
    }
    deleteUser(id:number):Observable<any>{
        return this.http.delete(API_URL+"/users/"+id).pipe(
            tap((user:User)=>console.log(`delete user w/id=${user.id}`)),
            catchError(this.handleError<User>('deleteUser'))
        )
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
    }
}