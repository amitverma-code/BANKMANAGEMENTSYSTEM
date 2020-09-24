import { Component, OnInit } from '@angular/core';
import { HttpClientService, MutualDetails } from "../service/httpclient.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewmutualfund',
  templateUrl: './viewmutualfund.component.html',
  styleUrls: ['./viewmutualfund.component.scss']
})
export class ViewmutualfundComponent implements OnInit {

  mutualDetails:MutualDetails[];

   constructor(private service:HttpClientService, private router: Router) { }
   ngOnInit(): void {
    this.service.getMutualDetails().subscribe(data => {
      this.mutualDetails = data.body;
      console.log(data.body);
 });
}

}
