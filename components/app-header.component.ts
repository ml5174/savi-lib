import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserServices } from '../../lib/service/user';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegisterIndividualProfilePage } from '../../pages/register-individual-profile/register-individual-profile';
import { RegisterLoginPage } from '../../pages/register-login/register-login';
import { VolunteerEventsService } from '../../lib/service/volunteer-events-service';
import { HomePage } from '../../pages/home/home';
import { DONATE_URL } from '../provider/config';

declare var cordova;

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
    private volunteerEvents : VolunteerEventsService,
      public platform: Platform,
      public alertCtrl: AlertController ) {}
 
  login() {
    this.nav.push(LoginPage);
  }

  logout() {
    this.userServices.logout();
    this.volunteerEvents.clearEvents();
    this.nav.setRoot(HomePage);
  }
  
    donate() {
        this.openExternalUrl(DONATE_URL);
    }

    private openExternalUrl(url: string) {

        if (this.platform.is('android') || this.platform.is('ios')) {
            let okayToLeaveApp = this.alertCtrl.create({
                title: '',
                cssClass: 'alertReminder',
                message: 'You are about to leave the app and visit the ' + url + ' website. NOTE: The website has a separate login.',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            if (cordova && cordova.InAppBrowser) {
                                cordova.InAppBrowser.open(url, '_system');
                            } else {
                                window.open(url, '_system');
                            }
                        }
                    }
                ]
            });
            okayToLeaveApp.present();

        } else {
            let okayToLeaveApp = this.alertCtrl.create({
                title: '',
                cssClass: 'alertReminder',
                message: 'You are about to leave the app and visit ' + url + ' website. NOTE: The website has a separate login.',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            window.open(url, '_system');
                        }
                    }
                ]
            });
            okayToLeaveApp.present();
        }
    }
  
  profile() {
    this.nav.push(RegisterIndividualProfilePage);
  }
  back() {
    this.nav.pop();
  }
}