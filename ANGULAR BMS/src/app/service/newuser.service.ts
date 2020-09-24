import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NewUserModel } from 'src/app/entity/NewUserModel';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
type EntityResponseType = HttpResponse<NewUserModel[]>;

@Injectable({
  providedIn: 'root'
})
export class NewuserService {


  constructor(private http:HttpClient) { }
  getAllUserDatabase():Observable<EntityResponseType>{
    return this.http.get<NewUserModel[]>("http://localhost:5515/userDatabases", {observe: 'response'});
  }

  saveUserDatabase(newUserModel:NewUserModel):Observable<EntityResponseType>{
    return this.http.post<NewUserModel[]>("http://localhost:8001/register", newUserModel, {observe: 'response'}).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
return throwError(error);
  }
}
