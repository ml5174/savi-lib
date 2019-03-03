import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserServices } from '../../lib/service/user';
import { Nav } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegisterIndividualProfilePage } from '../../pages/register-individual-profile/register-individual-profile';
import { RegisterLoginPage } from '../../pages/register-login/register-login';
import { VolunteerEventsService } from '../../lib/service/volunteer-events-service';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html'
})

export class AppHeaderComponent {
  @Input('back') isBack: boolean = false;
  @Input('title') title: string = 'Login';
  @Output() makeDonation = new EventEmitter<string>();

  rootPage: any = HomePage;
  registerPage: any = RegisterLoginPage;

  constructor(
    private nav: Nav,
    private userServices: UserServices,
    private volunteerEvents : VolunteerEventsService
  ) {
  }
  login() {
    this.nav.push(LoginPage);
  }
  logout() {
    this.userServices.logout();
    this.volunteerEvents.clearEvents();
    this.nav.setRoot(HomePage);
  }
  
  donate(){
  	 this.makeDonation.emit('makeDonation');
  }
  
  profile() {
    this.nav.push(RegisterIndividualProfilePage);
  }
  back() {
    this.nav.pop();
  }
}