import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/httpclient.service';
import {Account} from 'src/app/entity/Account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account: Account = new Account();
  submitted = false;
  panvalue: string = localStorage.getItem("pan");
  constructor(private newaccountService: HttpClientService, private router: Router) { }
  ngOnInit(): void {
  }
  newNewUserModel(): void {
    this.submitted = false;
    this.account = new Account();
  }
  save() {
    this.account.pan= this.panvalue;
    this.newaccountService
    .saveAccount(this.account).subscribe(data => {
      console.log(data)
      
      this.account = new Account();
      this.gotoList();
    }, 
    error => {console.log(error)
    //window.alert(error.message+"\n username or pancard already register");
    alert("Account Number Already Added or You Already Added 4 Accounts");
    this.router.navigate(['/viewaccount']);
  }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    alert("Account Added");
    this.router.navigate(['/viewaccount']);
  }
}
