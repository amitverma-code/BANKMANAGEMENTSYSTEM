import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { AccountComponent } from './account/account.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewmutualfundComponent } from './viewmutualfund/viewmutualfund.component';
import { MutualnameComponent } from './mutualname/mutualname.component';
import { TataComponent } from './tata/tata.component';
import { AxisComponent } from './axis/axis.component';
import { UcoComponent } from './uco/uco.component';
import { SbiComponent } from './sbi/sbi.component';
import { PnbComponent } from './pnb/pnb.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    RegistrationComponent,
    UserdetailComponent,
    ViewaccountComponent,
    ViewmutualfundComponent,
    MutualnameComponent,
    TataComponent,
    AxisComponent,
    UcoComponent,
    SbiComponent,
    PnbComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
