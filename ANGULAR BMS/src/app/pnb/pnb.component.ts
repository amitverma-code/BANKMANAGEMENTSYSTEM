import { Component, OnInit } from '@angular/core';
import { HttpClientService, Account} from 'src/app/service/httpclient.service';
import {BuyMutual} from 'src/app/entity/BuyMutual';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-pnb',
  templateUrl: './pnb.component.html',
  styleUrls: ['./pnb.component.scss']
})
export class PnbComponent implements OnInit {

  buyMutual: BuyMutual = new BuyMutual();
  submitted = false;
  mName : string = 'PNB';
  panvalue: string = localStorage.getItem("pan");
  accNu = localStorage.getItem("acc");
  accAr = JSON.parse(this.accNu);
  acc1 =this.accAr[0];
  acc2 =this.accAr[1];
  acc3 =this.accAr[2];
  acc4 =this.accAr[3];
  rdoSeason: string;
  constructor(private newaccountService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.accAr);

    
  }
  newNewUserModel(): void {
    this.submitted = false;
    this.buyMutual = new BuyMutual();
  }
  save() {
    this.buyMutual.pan= this.panvalue;
    this.buyMutual.mFund= this.mName;
    this.buyMutual.accountNumber=this.rdoSeason;
    this.newaccountService
    .buyMutualPnb(this.buyMutual).subscribe(data => {
      console.log(data)
      
      this.buyMutual = new BuyMutual();
      this.gotoList();
    }, 
    error => {console.log(error)
    //window.alert(error.message+"\n username or pancard already register");
    window.alert(error.headers+"\n");
  }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    alert("Mutual Fund Purchased");
    this.router.navigate(['/viewmutualfund']);
  }

}
