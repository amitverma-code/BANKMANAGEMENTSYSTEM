import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';
import {UserdetailComponent} from './userdetail/userdetail.component'
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewmutualfundComponent } from './viewmutualfund/viewmutualfund.component';
import { AccountComponent } from './account/account.component';
import { MutualnameComponent } from './mutualname/mutualname.component';
import { TataComponent } from './tata/tata.component';
import { AxisComponent } from './axis/axis.component';
import { UcoComponent } from './uco/uco.component';
import { SbiComponent } from './sbi/sbi.component';
import { PnbComponent } from './pnb/pnb.component';
const routes: Routes = [
  { path: '', component: EmployeeComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'registration', component: RegistrationComponent},
  { path: 'user', component: UserdetailComponent},
  { path: 'viewaccount', component: ViewaccountComponent},
  { path: 'viewmutualfund', component: ViewmutualfundComponent},
  { path: 'addaccount', component: AccountComponent},
  {path: 'mutualname', component: MutualnameComponent},
  {path: 'TATA', component: TataComponent},
  {path: 'AXIS', component: AxisComponent},
  {path: 'UCO', component: UcoComponent},
  {path: 'SBI', component: SbiComponent},
  {path: 'PNB', component: PnbComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
