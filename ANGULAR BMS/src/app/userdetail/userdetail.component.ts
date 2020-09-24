import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from "../service/httpclient.service";
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  user:User[];
 user2 : any;
 tata : string = 'TATA';
 axis : string ='AXIS';
 uco : string ='UCO';
 sbi : string ='SBI';
 pnb: string = 'PNB';
  constructor(private service:HttpClientService, private router: Router) { }
  
  ngOnInit(): void {
    //this.user2 = this.shared.getMessage();
    this.service.getUser().subscribe(data => {
      this.user = data.body;
      console.log(data.body);
      //console.log(this.shared.getMessage());
      //console.log(this.shared.getMessage);
      var k=0;
      for(var i=0; i<this.user.length;i++){
        this.user2=this.user[i].pan;
        console.log(this.user2);
      
      }
      localStorage.setItem("pan",this.user2);
      localStorage.setItem("tata",this.tata);
      localStorage.setItem("uco",this.uco);
      localStorage.setItem("axis",this.axis);
      localStorage.setItem("sbi",this.sbi);
      localStorage.setItem("pnb",this.pnb);
      console.log(this.user2);
 });
}
getPanNumber(){
  var k=0;
      for(var i=0; i<this.user.length;i++){
        this.user2=this.user[i].username;
      }
      return this.user2;
}

}
