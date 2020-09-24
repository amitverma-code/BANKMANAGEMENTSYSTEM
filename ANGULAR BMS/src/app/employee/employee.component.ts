import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/httpclient.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  displayedColumns: string[] = ["name", "designation", "delete"];
  accNu = localStorage.getItem("name");

  constructor(private httpClientService: HttpClientService) {}
ngOnInit(){}
  //ngOnInit() {
  //  this.httpClientService
  //    .getAllAccounts()
  //    .subscribe(response => this.handleSuccessfulResponse(response));
  //}

  handleSuccessfulResponse(response) {
    this.employees = response;
  }
}
