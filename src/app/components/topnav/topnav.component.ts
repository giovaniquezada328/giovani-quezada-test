import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { LoginService } from '../../../login/login.service';
// import { Observable } from 'rxjs';
// import { ValorReloj, XsegundoService } from 'src/app/shared/services/Xsegundo.service';
// import moment from 'moment-timezone';
// import { Moment } from 'moment';
// import { DeviceDetectorService } from 'ngx-device-detector';
import { environment } from 'src/environments/environment';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  public pushRightClass: string | undefined;
  // public aTimeFormat: string;
  // datos$: Observable<ValorReloj>;
  // hora: string;
  // minutos: string;
  // segundos: number;
  // dia: string;
  // fecha: string;
  // date: string;
  // public a: moment.Moment;
  private num = Date.now();
  pushRightContainerClass: string | undefined;
  deviceInfo = null;
  // isMobile: boolean;
  // isTablet: boolean;
  // isDesktopDevice: boolean;
  // currentApplicationVersion = environment.appVersion;
  // languageText: string;
  constructor(
    private router: Router,
    // private loginService: LoginService,
    // private segundo: XsegundoService,
    // private deviceService: DeviceDetectorService,
    // private translate: TranslateService
  ) {
    // this.isDesktopDevice = this.deviceService.isDesktop();
  }
  ngOnInit() {
    // this.languageText = localStorage.getItem('language') ? localStorage.getItem('language') : '';

    // this.a = moment(this.num).tz('America/Mexico_City');
    // this.hora =
    //   this.a.hour() < 10 ? '0' + this.a.hour() : this.a.hour().toString();
    // this.minutos =
    //   this.a.minute() < 10 ? '0' + this.a.minute() : this.a.minute().toString();
    // this.segundos = this.a.second();
    // const day = this.a.date() < 10 ? '0' + this.a.date() : this.a.date();
    // const month =
    //   this.a.month() < 10 ? `0${this.a.month() + 1}` : this.a.month() + 1;
    // const year = this.a.year() < 10 ? '0' + this.a.year() : this.a.year();

    // this.date = `${day}/${month}/${year}`;

    this.pushRightClass = 'push-right';
    this.pushRightContainerClass = 'push-container';
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
    // if (this.isDesktopDevice) {
      const container: any = document.querySelector('#main-container');
      container.classList.toggle(this.pushRightContainerClass);
    // }

  }

  // onLoggedout() {
  //   this.loginService.logout().subscribe(
  //     (res) => {
  //       this.router.navigate(['/login']);
  //     },
  //     (err) => console.log(err)
  //   );
  //   this.router.navigate(['/login']);
  // }

  // switchLanguageText(event){
  //   this.languageText = event;
  // }
}
