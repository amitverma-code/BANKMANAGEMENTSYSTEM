import { Component, OnInit } from '@angular/core';
import { HttpClientService, MutualName } from "../service/httpclient.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mutualname',
  templateUrl: './mutualname.component.html',
  styleUrls: ['./mutualname.component.scss']
})
export class MutualnameComponent implements OnInit {
  mutualDetails: MutualName[];
  constructor(private service:HttpClientService, private router: Router) { }

  ngOnInit(): void {
    this.service.getMutualName().subscribe(data => {
      this.mutualDetails = data.body;
       console.log(data.body);
    
  });
   }

}
