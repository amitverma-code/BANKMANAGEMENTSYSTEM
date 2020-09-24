import { Injectable } from "@angular/core";
import { HttpClient,HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subject, throwError } from 'rxjs';
import {BasicAuthHtppInterceptorService} from 'src/app/service/basic-auth-interceptor.service';
import { AuthenticationService } from './authentication.service';
import {UserdetailComponent} from 'src/app/userdetail/userdetail.component';
import { catchError } from 'rxjs/internal/operators/catchError';
//import {Account} from 'src/app/entity/Account';
export class Employee {
  constructor(
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public pan: string,
    public email: string,
    public conntactNumber: string,
    public dob: string
  ) {}
}
export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public pan: string,
    public email: string,
    public conntactNumber: string,
    public dob: string
  ) {}
}
export class Account{
  constructor(
   public accountNumber: string,
   public ifscCode: string,
    public accountName: string,
   public micrCode: string,
public pan: string,
 ){}}
  export class MutualDetails{
    constructor(
      public transactionId: string,
      public mFund: string,
      public accountNumber: string,
      public pan: string,
      public amountToInvest: string,
      public instant: string,
    ){}
  }
    export class MutualName{
      constructor(
       public id: string,
       public name: string,
     ){}}

     export class BuyMutual{
     constructor(
      public mFund: string,
      public accountNumber: string,
      public pan: string,
      public amountToInvest: string,
      ){}
  }
    

type EntityResponseType = HttpResponse<User[]>;
type EntityResponseType1 = HttpResponse<Account[]>;
type EntityResponseType2 = HttpResponse<MutualDetails[]>;
type EntityResponseType3 = HttpResponse<MutualName[]>;
type EntityResponseType4 = HttpResponse<BuyMutual[]>;
@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  user1: string;
  user2: string;
  user: User;
  account: Account;
  mutualName: MutualName;
  buynewMutual: BuyMutual;
  //
  private teacherMessage = new Subject<string>();
  teacherMess = this.teacherMessage.asObservable();
  constructor(private httpClient: HttpClient,private shared:BasicAuthHtppInterceptorService,private us: AuthenticationService) {}
  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "http://localhost:8080/employees",
      employee
    );
  }
  
      getUser():Observable<EntityResponseType>{
        this.user1= this.us.username();
      return this.httpClient.get<User[]>("http://localhost:8001/User/"+this.user1, {observe: 'response'});
  }
   
  getAccount():Observable<EntityResponseType1>{
    //this.user1= this.user.getpan();
  return this.httpClient.get<Account[]>("http://localhost:8001/AccByPan/"+localStorage.getItem("pan"), {observe: 'response'});
 }

  saveAccount(account:Account):Observable<EntityResponseType1>{
    return this.httpClient.post<Account[]>("http://localhost:8001/addAccount", account, {observe: 'response'}).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
return throwError(error);
  }

  getMutualDetails():Observable<EntityResponseType2>{
    //this.user1= this.user.getpan();
  return this.httpClient.get<MutualDetails[]>("http://localhost:8001/invByPan/"+localStorage.getItem("pan"), {observe: 'response'});
 }

 getMutualName():Observable<EntityResponseType3>{
return this.httpClient.get<MutualName[]>("http://localhost:8001/Mutuals", {observe: 'response'});
}

buyMutual(buynewMutual:BuyMutual):Observable<EntityResponseType4>{
  this.user2= this.us.username();
  return this.httpClient.post<BuyMutual[]>("http://localhost:8001/invest/"+this.user2+"/"+localStorage.getItem("tata"), buynewMutual, {observe: 'response'}).pipe(catchError(this.errorHandler));
}

buyMutualUco(buynewMutual:BuyMutual):Observable<EntityResponseType4>{
  this.user2= this.us.username();
  return this.httpClient.post<BuyMutual[]>("http://localhost:8001/invest/"+this.user2+"/UCO", buynewMutual, {observe: 'response'}).pipe(catchError(this.errorHandler));
}
buyMutualSbi(buynewMutual:BuyMutual):Observable<EntityResponseType4>{
  this.user2= this.us.username();
  return this.httpClient.post<BuyMutual[]>("http://localhost:8001/invest/"+this.user2+"/SBI", buynewMutual, {observe: 'response'}).pipe(catchError(this.errorHandler));
}
buyMutualPnb(buynewMutual:BuyMutual):Observable<EntityResponseType4>{
  this.user2= this.us.username();
  return this.httpClient.post<BuyMutual[]>("http://localhost:8001/invest/"+this.user2+"/PNB", buynewMutual, {observe: 'response'}).pipe(catchError(this.errorHandler));
}
buyMutualAxis(buynewMutual:BuyMutual):Observable<EntityResponseType4>{
  this.user2= this.us.username();
  return this.httpClient.post<BuyMutual[]>("http://localhost:8001/invest/"+this.user2+"/AXIS", buynewMutual, {observe: 'response'}).pipe(catchError(this.errorHandler));
}
}