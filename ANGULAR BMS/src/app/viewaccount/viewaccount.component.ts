import { Component, OnInit } from '@angular/core';
import { HttpClientService, Account } from "../service/httpclient.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.scss']
})
export class ViewaccountComponent implements OnInit {
  account: Account[];
  constructor(private service:HttpClientService, private router: Router) { }

  ngOnInit(): void {
   this.service.getAccount().subscribe(data => {
     this.account = data.body;
      console.log(data.body);
      var user2 = [];
      var k=0;
      for(var i=0; i<this.account.length;i++){
        user2.push(""+this.account[i].accountNumber);
      
      }
      localStorage.setItem('acc',JSON.stringify(user2));
     
 });
  }

}
